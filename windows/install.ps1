# Array of package managers - scoop, chocolatey, winget
$packageManagers = @("winget", "scoop", "choco")

# Array of packages to install
$packagesToInstall = @{
    "winget" = @(
        "9N7F2SM5D1LR", # Windows HDR Calibration
        "AgileBits.1Password",
        "ATLauncher.ATLauncher",
        "Audient.EVO",
        "Balena.Etcher",
        "Brave.Brave",
        "Discord.Discord",
        "ExpressVPN.ExpressVPN",
        "Git.Git",
        "GitHub.GitHubDesktop",
        "Insomnia.Insomnia",
        "JanDeDobbeleer.OhMyPosh",
        "Logitech.OptionsPlus",
        "M2Team.NanaZip",
        "Microsoft.PowerToys",
        "Microsoft.VisualStudioCode",
        "ModOrganizer2.modorganizer",
        "Nilesoft.Shell",
        "ONLYOFFICE.DesktopEditors",
        "OO-Software.ShutUp10",
        "qBittorrent.qBittorrent",
        "RustDesk.RustDesk",
        "Schniz.fnm",
        "Stremio.Stremio",
        "TechPowerUp.NVCleanstall",
        "Valve.Steam",
        "VideoLAN.VLC"
    )
    "scoop" = @{
        "buckets" = @(
            "nerd-fonts"
	    )
        "packages" = @(
            "Hasklig-NF-Mono"
        )
    }
    "choco" = @()
}

# Function to install winget
Function Install-WinGet {
    $URL = "https://api.github.com/repos/microsoft/winget-cli/releases/latest"
    $URL = (Invoke-WebRequest -Uri $URL).Content | ConvertFrom-Json |
            Select-Object -ExpandProperty "assets" |
            Where-Object "browser_download_url" -Match '.msixbundle' |
            Select-Object -ExpandProperty "browser_download_url"

    # download
    Invoke-WebRequest -Uri $URL -OutFile "Setup.msix" -UseBasicParsing

    # install
    Add-AppxPackage -Path "Setup.msix"

    # delete file
    Remove-Item "Setup.msix"
}

# Function to install scoop
function Install-Scoop {
    iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
}

# Function to install chocolatey
function Install-Chocolatey {
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
}

# Function to check if package manager is installed and available
function Check-IfPackageManagerInstalled {
    param(
        [string]$packageManager
    )

    switch($packageManager) {
        "scoop" {
            if (-not (Get-Command scoop -ErrorAction SilentlyContinue)) {
                try {
                    Install-Scoop
                } catch {
                    return $false
                }
            }
            return $true
        }
        "choco" {
            if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
                try {
                    Install-Chocolatey
                } catch {
                    return $false
                }
            }
            return $true
        }
        "winget" {
            if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
                try {
                    Install-WinGet
                } catch {
                    return $false
                }
            }
            return $true
        }
    }
}

Clear-Host
Write-Host "Starting setup..." -ForegroundColor Green
Write-Host

# Iterate over array of package managers and call functions to install packages
foreach ($packageManager in $packageManagers) {
    $isInstalled = Check-IfPackageManagerInstalled $packageManager

    # Iterate over array of package managers and call functions to install packages
    if ($isInstalled) {
        switch ($packageManager) {
            "scoop" {
                Write-Host "Adding scoop buckets and installing scoop packages..."
                Write-Host
                try {
                    # Add any dependencies here
                    scoop install git
                    Write-Host
                } catch {
                    Write-Host "Failed to install git." -ForegroundColor Red
                    Write-Host
                }
                foreach ($bucket in $packagesToInstall.scoop.buckets) {
                    try {
                        scoop bucket add $bucket
                        Write-Host
                    } catch {
                        Write-Host "Failed to add bucket $bucket." -ForegroundColor Red
                        Write-Host
                    }
                }
                foreach ($package in $packagesToInstall.scoop.packages) {
                    try {
                        if ($package -eq "Hasklig") {
                            scoop install -g $package
                            Write-Host
                            continue
                        } else {
                            scoop install $package
                            Write-Host
                        }
                    } catch {
                        Write-Host "Failed to install $package." -ForegroundColor Red
                        Write-Host
                    }
                }
            }
            "choco" {
                Write-Host "Installing chocolatey packages..."
                Write-Host
                foreach ($package in $packagesToInstall.choco) {
                    try {
                        choco install $package -y
                        Write-Host
                    } catch {
                        Write-Host "Failed to install $package." -ForegroundColor Red
                        Write-Host
                    }
                }
            }
            "winget" {
                Write-Host "Installing winget packages..."
                Write-Host
                foreach ($package in $packagesToInstall.winget) {
                    try {
                        winget install $package --accept-source-agreements --accept-package-agreements
                        Write-Host
                    } catch {
                        Write-Host "Failed to install $package." -ForegroundColor Red
                        Write-Host
                    }
                }
            }
        }
    } else {
        Write-Host "Failed to install $packageManager." -ForegroundColor Red
        Write-Host
    }
}

# Install windows terminal config
Write-Host "Installing windows terminal config..."
$winTermConfigFile = "$PSScriptRoot\windows-terminal\settings.json"
$winConfigDestination = "C:\Users\$env:USERNAME\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\"
Copy-Item -Path $winTermConfigFile -Destination $winConfigDestination -Force
Write-Host "Done." -ForegroundColor Green
Write-Host

# Setup Oh-My-Posh
Write-Host "Installing Oh-My-Posh config..."
Write-Host

# Copy Oh-My-Posh config to user folder
$poshConfigFile = "$PSScriptRoot\..\shared\oh-my-posh\onedarkpro.omp.json"
mkdir "C:\Users\$env:USERNAME\.config\oh-my-posh\"
$poshConfigDestination = "C:\Users\$env:USERNAME\.config\oh-my-posh\"
Copy-Item -Path $poshConfigFile -Destination $poshConfigDestination -Force

# Check if the $PROFILE file exists
if (!(Test-Path $PROFILE)) {
    # Create the $PROFILE file
    New-Item -Type File -Path $PROFILE -Force
}

# Remove the default init command from the $PROFILE file if installing Oh-My-Posh inserted it
$lines = Get-Content -Path $PROFILE
$lines = $lines | Where-Object { $_ -notmatch "oh-my-posh init pwsh --config C:\Users\$env:USERNAME\.config\oh-my-posh\onedarkpro.omp.json | Invoke-Expression" }
Set-Content -Path $PROFILE -Value $lines

# Add the new init command to the $PROFILE file
Add-Content -Path $PROFILE -Value "oh-my-posh init pwsh --config C:\Users\$env:USERNAME\.config\oh-my-posh\onedarkpro.omp.json | Invoke-Expression"

# Source the $PROFILE file
. $PROFILE

Write-Host "Done." -ForegroundColor Green
Write-Host

# Install Nilesoft Shell config
Write-Host "Installing Nilesoft Shell config..."
Write-Host
$shellConfigFile = "$PSScriptRoot\nilesoft-shell\shell.nss"
$shellConfigDestination = "C:\Program Files\Nilesoft Shell"
Copy-Item -Path $shellConfigFile -Destination $shellConfigDestination -Force

Write-Host "Done." -ForegroundColor Green
Write-Host

# FancyZones config install
Write-Host "Installing FancyZones config..."
Write-Host
$zonesConfigFile = "$PSScriptRoot\fancy-zones\custom-layouts.json"
$zonesSettingsile = "$PSScriptRoot\fancy-zones\settings.json"
$zonesLayoutFile = "$PSScriptRoot\fancy-zones\applied-layouts.json"
$zonesDestination = "C:\Users\$env:USERNAME\AppData\Local\Microsoft\PowerToys\FancyZones\"
Copy-Item -Path $zonesSettingsile -Destination $zonesDestination -Force
Copy-Item -Path $zonesLayoutFile -Destination $zonesDestination -Force
Copy-Item -Path $zonesConfigFile -Destination $zonesDestination -Force
Write-Host "FancyZones config copied to user folder"
Write-Host

# Setup Dev Environment #
Write-Host "Setting up dev environment..."
Write-Host

# Install latest node from fnm
Write-Host "Installing latest node..."
Write-Host
fnm install --lts

# Add the fnm init to the $PROFILE file
Add-Content -Path $PROFILE -Value "fnm env --use-on-cd | Out-String | Invoke-Expression"

Write-Host "node: "
node --version
Write-Host "npm: "
npm --version
Write-Host

Write-Host "Setup complete." -ForegroundColor Green
Write-Host
Write-Host "Please restart your terminal to apply changes." -ForegroundColor Yellow