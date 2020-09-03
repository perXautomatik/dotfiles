# My linux configurations (or Dotfiles)

These are used on Mint XFCE 19.1, Ubuntu and Cygwin.

These are settings for bash, vim, etc.

To debug any ShellScript, just add `set -x` after the shell bang: https://stackoverflow.com/questions/36273665/what-does-set-x-do

- [My linux configurations (or Dotfiles)](#my-linux-configurations-or-dotfiles)
    + [To install them](#to-install-them)
    + [Fix system crash](#fix-system-crash)
    + [To list all programs using a given port](#to-list-all-programs-using-a-given-port)
    + [Install Sublime Text](#install-sublime-text)
    + [Enable hibernation](#enable-hibernation)
    + [ksuperkey](#ksuperkey)
    + [Ksysguard & others](#ksysguard--others)
    + [chroot](#chroot)
    + [Optionally install KDE](#optionally-install-kde)
    + [Hide user account from login screen](#hide-user-account-from-login-screen)
    + [Install wine & others](#install-wine--others)
    + [Remove Default XFCE 4 Keybinds](#remove-default-xfce-4-keybinds)
    + [Create Default Keybinds](#create-default-keybinds)
    + [Linux system information](#linux-system-information)

* The table of contents used on this Markdown was generated by:
  1. `git clone https://github.com/evandroforks/markdown-toc`
  1. `cd markdown-toc`
  1. `npm -g install`
  1. `cd ../this-repository-root`
  1. `markdown-toc README.MD`


### To install them

1. First backup your settings, only then, clone this repository using this command:
   ```
   git clone --recursive https://github.com/evandrocoan/MyLinuxSettings.git ~/Downloads/MyLinuxSettings
   ```

   And move them to your main's user folder replacing your own settings:
   ```
   rsync -r -t -v -s ~/Downloads/MyLinuxSettings/ ~/
   ```

1. Enable the `.gitignore_global` file with:
   1. **`git config --global core.excludesfile ~/.gitignore_global`**
   1. https://stackoverflow.com/questions/7335420/global-git-ignore

1. Fix `~/.ssh/config` permissions:
   1. `chmod 600 ~/.ssh/config`
   1. https://serverfault.com/questions/253313/ssh-returns-bad-owner-or-permissions-on-ssh-config

1. After installing, reload the `XFCE` components, so the settings does not get overridden.

   This should reload the `XFCE` panel components:
   ```
   # https://www.makeuseof.com/tag/refresh-linux-desktop-without-rebooting/
   xfce4-panel -r && xfwm4 --replace &
   ```

   For other components, research how it could be done, or just install the settings by using another
   user account or desktop environment as KDE Plasma, Mate, Cinnamon, etc.


### Vim style cheat

1. Select all lines:
   1.  **`ggVG`**
   1. **`gg`** moves to first line.
      **`V`** starts visual mode.
      **`G`** jumps to last line thereby selecting from first to last line
   1. https://vi.stackexchange.com/questions/9028/what-is-the-command-for-select-all-in-vim-and-vsvim

1. In vim, how can I quickly switch between tabs?
   1. **`g, t`** Next tab
   1. **`g, T`** Prior tab
   1. **`nnn, g, t`** Numbered tab
   1. https://superuser.com/questions/410982/in-vim-how-can-i-quickly-switch-between-tabs

1. Splitting a single file into multiple windows on Vim
   1. **`Ctrl+w, v`** Vertical Split
   1. **`Ctrl+w, n`** Horizontal Split
   1. https://superuser.com/questions/1139804/splitting-a-single-file-into-multiple-windows-on-vim

1. Is there a way to move a split page to a new tab in Vim?
   1. **`Ctrl+w, Shift+t`**
   1. https://superuser.com/questions/117969/is-there-a-way-to-move-a-split-page-to-a-new-tab-in-vim

1. How to copy selected lines to clipboard in vim
   1. Copy to the clipboard **`" * y`**
   1. The unnamed register **`" " y`**
   1. 10 numbered registers **`" 0 y`** to **`" 9 y`**
   1. The small delete register **`" - y`**
   1. 26 named registers **`" a y`** to **`" z y`** or **`" A y`** to **`" Z y`**
   1. four read-only registers **`" : y`**, **`" . y`**, **`" % y`** and **`" # y`**
   1. the expression register **`" = y`**
   1. The selection and drop registers **`" * y`**, **`" + y`** and **`" ~ y`**
   1. The black hole register **`" _ y`**
   1. Last search pattern register **`" / y`**
   1. http://vimdoc.sourceforge.net/htmldoc/change.html#registers
   1. https://stackoverflow.com/questions/9166328/how-to-copy-selected-lines-to-clipboard-in-vim


### Fix system crash

Disable Google Chrome/Firefox hardware acceleration:
1. https://www.lifewire.com/hardware-acceleration-in-chrome-4125122
1. https://support.mozilla.org/en-US/kb/hardware-acceleration-and-windowblinds-crash
1. https://superuser.com/questions/18609/changing-firefox-tab-cycle-order
1. https://superuser.com/questions/1318336/how-to-disable-ctrlq-shortcut-in-firefox-on-linux

Add `GRUB_CMDLINE_LINUX="i915.enable_rc6=0"` to `/etc/default/grub`:
1. https://unix.stackexchange.com/questions/401746/drm-i915-resetting-chip-after-gpu-hang
1. https://askubuntu.com/questions/857123/how-to-tweak-intel-hd-graphics-on-ubuntu-16-04
1. https://bugs.freedesktop.org/show_bug.cgi?id=104522
1. https://bugs.freedesktop.org/show_bug.cgi?id=104520
1. https://bbs.archlinux.org/viewtopic.php?id=232551
1. https://forum.manjaro.org/t/i915-gpu-hang-solved/37200
1. https://bugs.freedesktop.org/show_bug.cgi?id=108614
```
GRUB_CMDLINE_LINUX="i915.enable_rc6=0 i915.semaphores=0"
# after changing this, run
# sudo update-grub
```

1. https://unix.stackexchange.com/questions/408582/how-to-disable-hardware-acceleration-in-linux
   * **`vim /etc/X11/xorg.conf.d/disable-gpu.conf`**
   * **`vim /etc/X11/xorg.conf.d/90-disable-gpu.conf`**
   ```shell
   Section "Extensions"
       Option "GLX" "Disable"
       Option "DRI2" "Disable"
       Option "DRI3" "Disable"
   EndSection
   ```
   * **`/var/log/sysinfo`**
   ```
   Oct 18 14:26:37 evandro-pc kernel: [309258.854944] [drm] GPU HANG: ecode 9:0:0x89b0929b, in twinkle [12478], reason: Hang on rcs0, action: reset
   Oct 18 14:26:37 evandro-pc kernel: [309258.854956] i915 0000:00:02.0: Resetting rcs0 after gpu hang
   Oct 18 14:26:38 evandro-pc kernel: [309260.071284] [drm:gen8_reset_engines [i915]] *ERROR* rcs0: reset request timeout
   Oct 18 14:26:38 evandro-pc kernel: [309260.071330] i915 0000:00:02.0: Resetting chip after gpu hang
   Oct 18 14:26:39 evandro-pc kernel: [309261.286980] [drm:gen8_reset_engines [i915]] *ERROR* rcs0: reset request timeout
   Oct 18 14:26:39 evandro-pc kernel: [309261.287024] [drm:i915_reset [i915]] *ERROR* Failed to reset chip: -5
   Oct 18 14:26:40 evandro-pc xdg-desktop-por[22547]: xdg-desktop-portal-gtk: Fatal IO error 11 (Resource temporarily unavailable) on X server :0.0.
   ```


#### Fix Skype Crash

1. Edit the standard skype start menu shortcut with `Menu Editor` to:
   ```
   /usr/bin/skypeforlinux %U --disable-gpu
   ```
1. Edit the `snap` start menu shortcut with `Menu Editor` to:
   ```
   env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/skype_skypeforlinux.desktop /snap/bin/skype --disable-gpu %U
   ```
1. Edit the file `/var/lib/snapd/desktop/applications/skype_skypeforlinux.desktop` to:
   ```
   [Desktop Entry]
   X-SnapInstanceName=skype
   Name=Skype
   Comment=Skype Internet Telephony
   Exec=env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/skype_skypeforlinux.desktop /snap/bin/skype --disable-gpu %U
   Icon=/snap/skype/66/meta/gui/skypeforlinux.png
   ...
   ```


### To list all programs using a given port

```
sudo netstat -tulpn | grep 5060
```
1. https://www.cyberciti.biz/faq/what-process-has-open-linux-port/


### Install Sublime Text

1. https://www.sublimetext.com/3
1. Install StudioChannel:
   1. https://github.com/evandrocoan/ITE#installation-go-to-top
   1. `https://raw.githubusercontent.com/evandrocoan/StudioChannel/master/channel.json`
1. https://forum.sublimetext.com/t/multiple-sublime-processes-with-different-environment/34575

Setup it to start maximized with:
1. [.local/bin/](.local/bin/)
1. [.local/bin/open_maximized.sh](.local/bin/open_maximized.sh)
1. [.local/bin/SublimeTextMaximazed.sh](.local/bin/SublimeTextMaximazed.sh)


### Enable hibernation

It will take you computer from 10 to 30 minutes to come out from the hibernation.
To speed things up, you need to install an SSD drive of 16 or 32 GB,
depending on how much memory do you use.
Remember,
the SWAP partition must hold all you RAM memory,
including the actual virtual memory already on the SWAP partition.

1. Set swap file size to 20GG on the next step tutorial
1. https://forums.linuxmint.com/viewtopic.php?f=42&t=284100 [GUIDE] How to hibernate to a swap file in Linux Mint 19.x
1. https://forums.linuxmint.com/viewtopic.php?t=273202 How to enable hibernation with swap partion on Linux Mint 19
1. https://askubuntu.com/questions/33697/how-do-i-add-swap-after-system-installation
1. https://askubuntu.com/questions/343268/how-to-use-manual-partitioning-during-installation
1. https://www.cyberciti.biz/faq/linux-check-swap-usage-command/
1. https://askubuntu.com/questions/562153/can-swap-be-on-a-different-disk
1. https://askubuntu.com/questions/180730/how-do-i-restore-a-swap-partition-i-accidentally-deleted
1. https://www.cyberciti.biz/faq/linux-add-a-swap-file-howto/

### Disable Suspention/Hibernation Wake Up

By default almost any device can wake up your computer.
To disable this,
create the file `vim /etc/systemd/system/wakeup-events.service`
```
[Unit]
Description=Disable wakeup events on startup

[Service]
Type=oneshot
ExecStart=/bin/bash ~/scripts/wakeup-events.sh

[Install]
WantedBy=multi-user.target
```
And run `sudo systemctl enable wakeup-events`
```
Created symlink /etc/systemd/system/multi-user.target.wants/wakeup-events.service → /etc/systemd/system/wakeup-events.service.
```

### Extension Swap Partition/File

Instead of expanding a SWAP partition, just create a swap file instead!

1. sudo swapon --show
   ```
   NAME      TYPE      SIZE USED PRIO
   /dev/sda2 partition 1.9G   0B   -2
   ```
1. `sudo fallocate -l 1G /swapfile`
1. `sudo chmod 600 /swapfile`
1. `sudo mkswap /swapfile`
1. `sudo swapon /swapfile`
1. `sudo nano /etc/fstab`
1. And paste the following line:
   ```
   /swapfile swap swap defaults 0 0
   ```
1. `sudo swapon --show`
   ```
   NAME      TYPE  SIZE   USED PRIO
   /swapfile file 1024M 507.4M   -1
   ```
1. `sudo free -h`
1. https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-18-04/

### ksuperkey

1. Clone and install https://github.com/hanschen/ksuperkey with `make` and `sudo make install`
1. Remove the `Super+L` to `xfce4-popup-whiskermenu` on `All Settings -> Keyboard -> Applications Shortcuts` and add it to `Super_L|m`
1. Then, run the command `ksuperkey -e 'Super_L=Super_L|m'` on system startup.

Enable super user account login with `su`:
```sh
sudo passwd root

# https://askubuntu.com/questions/20450/disable-root-account-in-ubuntu
sudo passwd -l root
```

### Disable auto update pop up

1. `sudo vim /etc/apt/apt.conf.d/99update-notifier`
1. Add `#` in front of `DPkg::Post-Invoke {"if ...`
1. https://askubuntu.com/questions/218755/how-to-disable-the-update-manager-popup

### Ksysguard & others

Add ppa repositories:
```
sudo add-apt-repository ppa:sporkwitch/autokey &&
sudo add-apt-repository ppa:hluk/copyq &&
sudo apt update
```

Install stuff:
```
sudo apt install build-essential autokey-gtk copyq mtp-tools gmtp imwheel openssh-server;
sudo apt-get install nethogs python3 python-pip python3-pip;
sudo apt-get install audacity gnome-gmail ksysguard wmctrl;
sudo apt-get install xdotool grsync unison-gtk indicator-multiload;
sudo apt-get install vim vim-gtk3 ncdu nemo glogg qps nemo-fileroller;
sudo apt-get install libc6-dbg gsmartcontrol iotop fatrace;
sudo apt-get install gnome-disk-utility speedcrunch okular;
sudo apt-get install terminator thunar-archive-plugin gparted p7zip-full;
sudo apt-get install xfce4-power-manager xfce4-systemload-plugin xfce4-screenshooter;
sudo apt-get install xfce4-terminal xfdashboard;
pip install setuptools;
pip3 install setuptools;
pip install wheel;
pip3 install wheel python-language-server;
```

1. `sudo apt-get install gnome-disks` (https://askubuntu.com/questions/500549/how-to-run-gnome-disk-utility#)
1. https://www.poweriso.com/download-poweriso-for-linux.htm
1. https://remmina.org/how-to-install-remmina/
1. `flameshot` https://github.com/lupoDharkael/flameshot/issues/11#issuecomment-397026899
1. `terminator` (to set terminator as default terminal on `nemo` file manager)
   1. `gsettings set org.cinnamon.desktop.default-applications.terminal exec 'xfce4-terminal'`
   1. https://github.com/linuxmint/nemo/issues/2091
   1. https://unix.stackexchange.com/questions/86875/determining-specific-file-responsible-for-high-i-o
1. Open `Preferred Applications` and set mailto as `gnome-gmail`
1. Open `Preferred Applications` and set File Manger as `nemo`
1. Open `KSysGuard` & `System Monitor` and Install KSysGuard System Monitor Tabs:
   * Hard Disk Totals - https://store.kde.org/p/1198291
   * System Load and Temps - https://store.kde.org/p/1198291
1. Open `Unisson` & `Grsync`
1. Add `System Load Monitor` widget to the main panel
1. Create keybind `,` (numpad comma), `autokey-run -p insert_dot`
   1. https://github.com/autokey/autokey
   1. Run `autokey-gtk --verbose &` for debugging it
1. https://unix.stackexchange.com/questions/192048/mount-mtp-android-device-in-linux-mint-17-1
1. https://unix.stackexchange.com/questions/389952/how-to-get-the-samsung-galaxy-s5-to-work-with-mtp-on-debian-9
1. Run `imwheel -b "4 5"`on system start up
   1. Create `~/.imwheelrc` with:
      * [.imwheelrc](.imwheelrc)
   1. https://wiki.archlinux.org/index.php/IMWheel
      * Use `imwheel -d --debug --kill` to list windows
   1. Use `sudo killall -9 imwheel; sleep 2; imwheel` to restart the service
   1. https://askubuntu.com/questions/285689/increase-mouse-wheel-scroll-speed
   1. https://mintguide.org/other/643-setup-the-mouse-scroll-wheel-speed.html#sel=13:4,13:14
   1. Disable smooth scrolling on Google Chrome:
      * `chrome://flags/#smooth-scrolling`
      * https://www.ghacks.net/2016/03/16/turn-off-smooth-scrolling-google-chrome/


### chroot

1. `sudo apt-get install debootstrap schroot`
1. Create an isolated environment with `chroot` (it will inherit your $HOME environment variable, etc)
   ```sh
   mkdir /myfiles/ubuntu_xenial_1604
   debootstrap --arch=amd64 xenial /myfiles/ubuntu_xenial_1604 http://archive.ubuntu.com/ubuntu/
   cp /usr/share/i18n/SUPPORTED /etc/locale.gen
   locale-gen
   dpkg-reconfigure locales
   apt-get install linux-headers-$(uname -r) gcc dialog unzip psmisc
   ```
1. `mkdir -p /myfiles/ubuntu_xenial_1604/home/$USER/`
1. Add main machine resources to chroot nested machine
   1. `mkdir -p /myfiles/ubuntu_xenial_1604/proc/`
   1. `mkdir -p /myfiles/ubuntu_xenial_1604/sys/`
   1. `mkdir -p /myfiles/ubuntu_xenial_1604/dev/pts`
   1. `sudo mount -t proc proc /myfiles/ubuntu_xenial_1604/proc/`
   1. `sudo mount -t sysfs sys /myfiles/ubuntu_xenial_1604/sys/`
   1. `sudo mount -o bind /dev /myfiles/ubuntu_xenial_1604/dev/`
   1. `sudo mount -t devpts pts dev/pts/`
   1. https://wiki.archlinux.org/index.php/Chroot
   1. https://unix.stackexchange.com/questions/98405/which-of-proc-sys-etc-should-be-bind-mounted
1. Or edit `/etc/fstab`:
   * https://askubuntu.com/questions/550348/how-to-make-mount-bind-permanent
   ```sh
   # <device>                             <dir>   <type>  <options>   <dump>  <pass>
   /myfiles/ubuntu_xenial_1604/proc/      /proc    auto    -t,proc       0      1
   /myfiles/ubuntu_xenial_1604/sys/       /sys     auto    -t,sysfs      0      1
   /myfiles/ubuntu_xenial_1604/dev/pts    /dev     auto    -t,devpts     0      1
   /myfiles/ubuntu_xenial_1604/dev/       /dev     auto    -o,bind       0      1
   ```
1. `sudo mount --bind /usr/local/something /myfiles/ubuntu_xenial_1604/mnt/something`
   * Optionally, mount something inside the new Linux
   * `sudo umount /myfiles/ubuntu_xenial_1604/mnt/something`
1. Generate a new list of sources and add them to the file **/etc/apt/sources.list**
   * https://repogen.simplylinux.ch/
   ```
   #------------------------------------------------------------------------------#
   #                            OFFICIAL UBUNTU REPOS                             #
   #------------------------------------------------------------------------------#

   ###### Ubuntu Main Repos
   deb http://55.archive.ubuntu.com/ubuntu/ xenial main restricted universe multiverse
   deb-src http://55.archive.ubuntu.com/ubuntu/ xenial main restricted universe multiverse

   ###### Ubuntu Update Repos
   deb http://55.archive.ubuntu.com/ubuntu/ xenial-security main restricted universe multiverse
   deb http://55.archive.ubuntu.com/ubuntu/ xenial-updates main restricted universe multiverse
   deb http://55.archive.ubuntu.com/ubuntu/ xenial-proposed main restricted universe multiverse
   deb http://55.archive.ubuntu.com/ubuntu/ xenial-backports main restricted universe multiverse
   deb-src http://55.archive.ubuntu.com/ubuntu/ xenial-security main restricted universe multiverse
   deb-src http://55.archive.ubuntu.com/ubuntu/ xenial-updates main restricted universe multiverse
   deb-src http://55.archive.ubuntu.com/ubuntu/ xenial-proposed main restricted universe multiverse
   deb-src http://55.archive.ubuntu.com/ubuntu/ xenial-backports main restricted universe multiverse

   ###### Ubuntu Partner Repo
   deb http://archive.canonical.com/ubuntu xenial partner
   deb-src http://archive.canonical.com/ubuntu xenial partner
   ```
1. https://help.ubuntu.com/community/BasicChroot
1. https://help.ubuntu.com/community/DebootstrapChroot


### Optionally install KDE

1. 1 GB to install
   * `sudo apt-get install kde-standard kwin-addons`
1. 28 MB to install
   * `sudo apt install budgie-desktop-environment`
1. 128 MB to install
   * http://ubuntuhandbook.org/index.php/2018/11/install-cinnamon-desktop-4-0-ubuntu-18-04/
   * `sudo apt-get install cinnamon-desktop-environment`
   * Install applets:
     1. Cinnamenu
     1. Show desktop ++
     1. Collapsible Systray
     1. System Monitor


### Hide user account from login screen

Open **/var/lib/AccountsService/users/XXX** and add:
```
[User]
SystemAccount=true
```
1. https://forums.linuxmint.com/viewtopic.php?t=212990


### Install wine & others

1. Software Manager -> Twinkle -> Install
1. https://www.virtualbox.org/wiki/Linux_Downloads
1. http://wiki.octave.org/Octave_for_Debian_systems
1. https://wiki.winehq.org/Ubuntu
1. https://www.cockos.com/licecap/
1. https://github.com/balena-io/etcher
1. https://askubuntu.com/questions/785657/i-cant-install-gnome-schedule-on-ubuntu-16-04
1. https://askubuntu.com/questions/779946/how-do-i-install-lastfm-scrobblernewbie-at-ubuntu-stuff
1. http://www.aimp2.us/aimp3-download.php (install inside wine)
1. https://www.last.fm/about/trackmymusic?platform=windows (install inside wine)
1. https://askubuntu.com/questions/138908/how-to-execute-a-script-just-by-double-clicking-like-exe-files-in-windows
1. https://www.teamviewer.com/pt-br/download/linux/
1. Wireshark
   * https://askubuntu.com/questions/700712/how-to-install-wireshark
   * https://askubuntu.com/questions/74059/how-do-i-run-wireshark-with-root-privileges
1. https://www.syntevo.com/smartgit/download/
   Sometimes ignored directories are containing tracked files in which case changes to these files might not show up automatically. If this is the case for you, you may disable this optimization by setting system property 'fileMonitor.excludeIgnoredDirectories=false'.


### Configure Second Monitor

1. https://www.ostechnix.com/how-to-adjust-monitor-brightness-from-command-line-in-linux/
   ```
   $ xrandr -q
   HDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 510mm x 290mm
   DP-1 connected 1920x1080+1920+0 (normal left inverted right x axis y axis) 510mm x 290mm

   $ xrandr --output DP-1 --brightness 0.7
   $ xrandr --output DP-1 --gamma 0.9:0.9:0.9
   ```

1. https://github.com/calandoa/movescreen
   ```
   ./movescreen.py right
   ./movescreen.py left
   ```

1. To see all current monitor settings
   * http://shallowsky.com/blog/tags/x11/
   ```
   $ xrandr --verbose
   ```

1. How do I save my new resolution setting with xrandr?
   * Create the `$HOME/.xprofile` and set it as executable `chmod +x "$HOME/.xprofile"`:
   ```sh
   xrandr --output DP-1 --brightness 1.0
   xrandr --output DP-1 --gamma 0.85:0.85:0.85
   ```
   * https://askubuntu.com/questions/754231/how-do-i-save-my-new-resolution-setting-with-xrandr
   * https://wiki.archlinux.org/index.php/Xprofile


### Disable line wrap

1. `setterm -linewrap off`
1. https://unix.stackexchange.com/questions/20493/how-to-disable-line-wrap-in-a-terminal/345492


### Remove Default XFCE 4 Keybinds

1. All Settings -> Window Manger -> Keyboard ->
   * Raise Window, `Alt+Shift+PgUp`
   * Lower Window, `Alt+Shift+PgDown`


### Create Default Keybinds

1. `Ctrl+Alt+J`, subl -n
1. `Ctrl+Alt+O`, gnome-calculator
1. `Ctrl+Alt+H`, gnome-system-monitor
1. `Ctrl+Print`, flameshot gui
1. [.local/bin/play_stop_music.sh](.local/bin/play_stop_music.sh)
   1. `Pause`, play_stop_music.sh space
   1. `Alt+Super+Up`, play_stop_music.sh Up
   1. `Alt+Super+Down`, play_stop_music.sh Down
   1. `Alt+Super+Left`, play_stop_music.sh F1
   1. `Alt+Super+Right`, play_stop_music.sh F2
1. `Alt+Super+0`, wmctrl -x -a aimp.exe.Wine
1. `Alt+Super+1`, wmctrl -x -a minilyrics.exe.Wine
   * To list active windows use `wmctrl -lx`

**`/home/evandro/.local/share/applications/lastfm.desktop`**
```
[Desktop Entry]
Version=1.1
Type=Application
Name=Last.fm
Comment=Listen to Last.fm radio
Icon=lastfm
Exec=wine "/home/evandro/.wine/dosdevices/c:/Program Files (x86)/Last.fm/Last.fm Scrobbler.exe"
Actions=
Categories=Audio;AudioVideo;Qt;
StartupNotify=true
```

**`/home/evandro/.local/share/applications/menulibre-aimp3.desktop`**
```
[Desktop Entry]
Version=1.1
Type=Application
Name=AIMP3
Comment=Music Player running on Wine
Icon=applications-other
Exec=wine "/home/evandro/Programs/AIMP3/AIMP.exe"
Actions=
Categories=AudioVideo;
```

**`/home/evandro/.local/share/applications/menulibre-minilyrics-wine.desktop`**
```
[Desktop Entry]
Version=1.1
Type=Application
Name=Minilyrics Wine
Comment=A small descriptive blurb about this application.
Icon=applications-other
Exec=wine "/home/evandro/.wine/dosdevices/c:/Program Files (x86)/MiniLyrics/MiniLyrics.exe"
Actions=
Categories=AudioVideo;
```


### Linux system information

1. **`lshw -class disk`**
    ```
      *-disk:0
           description: ATA Disk
           product: WDC WD20EFRX-68E
           vendor: Western Digital
           physical id: 0
           bus info: scsi@0:0.0.0
           logical name: /dev/sda
           version: 82.0
           serial: WD-WCC4M0NJKLUP
           size: 1863GiB (2TB)
           capabilities: gpt-1.00 partitioned partitioned:gpt
           configuration: ansiversion=5 guid=3fc710f6-7e35-4a0a-9142-73a813966c3b
    ```

1. **`sudo apt-get install inxi dmidecode lshw`**
    ```
    $ sudo lshw -short -C memory
    H/W path       Device     Class          Description
    ====================================================
    /0/0                      memory         64KiB BIOS
    /0/3d                     memory         8GiB System Memory
    /0/3d/0                   memory         8GiB DIMM DDR4 Synchronous 2400 MHz (0,4 ns)
    /0/3d/1                   memory         [empty]
    /0/3d/2                   memory         [empty]
    /0/3d/3                   memory         [empty]
    /0/43                     memory         256KiB L1 cache
    /0/44                     memory         1MiB L2 cache
    /0/45                     memory         6MiB L3 cache
    /0/100/1f.2               memory         Memory controller
    ```

1. **`sudo dmidecode --type 17`**
    ```
    # dmidecode 3.1
    Getting SMBIOS data from sysfs.
    SMBIOS 3.0.0 present.

    Handle 0x003E, DMI type 17, 40 bytes
    Memory Device
      Array Handle: 0x003D
      Error Information Handle: Not Provided
      Total Width: 64 bits
      Data Width: 64 bits
      Size: 8192 MB
      Form Factor: DIMM
      Set: None
      Locator: ChannelA-DIMM0
      Bank Locator: BANK 0
      Type: DDR4
      Type Detail: Synchronous
      Speed: 2400 MT/s
      Manufacturer: 859B
      Serial Number: E1A93CFC
      Asset Tag: 9876543210
      Part Number: BLS8G4D240FSB.16FBD2
      Rank: 2
      Configured Clock Speed: 2400 MT/s
      Minimum Voltage: 1.2 V
      Maximum Voltage: 1.2 V
      Configured Voltage: 1.2 V
    ```

1. **`sudo inxi -Fxz`**
    ```
    System:    Host: evandro-pc Kernel: 4.15.0-45-generic x86_64 bits: 64 compiler: gcc v: 7.3.0 Desktop: Xfce 4.12.3
               Distro: Linux Mint 19.1 Tessa base: Ubuntu 18.04 bionic
    Machine:   Type: Desktop System: Gigabyte product: H110M-S2PH v: N/A serial: <filter>
               Mobo: Gigabyte model: H110M-S2PH-CF v: x.x serial: <filter> UEFI: American Megatrends v: F21 date: 06/09/2017
    CPU:       Topology: Quad Core model: Intel Core i5-7400 bits: 64 type: MCP arch: Kaby Lake rev: 9 L2 cache: 6144 KiB
               flags: lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx bogomips: 24000
               Speed: 800 MHz min/max: 800/3500 MHz Core speeds (MHz): 1: 800 2: 800 3: 800 4: 800
    Graphics:  Device-1: Intel HD Graphics 630 vendor: Gigabyte driver: i915 v: kernel bus ID: 00:02.0
               Display: x11 server: X.Org 1.19.6 driver: modesetting unloaded: fbdev,vesa resolution: 1920x1080~60Hz
               OpenGL: renderer: Mesa DRI Intel HD Graphics 630 (Kaby Lake GT2) v: 4.5 Mesa 18.2.2 direct render: Yes
    Audio:     Device-1: Intel 100 Series/C230 Series Family HD Audio vendor: Gigabyte Sunrise Point-H driver: snd_hda_intel
               v: kernel bus ID: 00:1f.3
               Sound Server: ALSA v: k4.15.0-45-generic
    Network:   Device-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet vendor: Gigabyte driver: r8169 v: 2.3LK-NAPI
               port: e000 bus ID: 01:00.0
               IF: enp1s0 state: up speed: 1000 Mbps duplex: full mac: <filter>
    Drives:    Local Storage: total: 931.51 GiB used: 47.82 GiB (5.1%)
               ID-1: /dev/sda vendor: Western Digital model: WD10EZEX-00WN4A0 size: 931.51 GiB
    Partition: ID-1: / size: 907.63 GiB used: 47.81 GiB (5.3%) fs: ext4 dev: /dev/dm-0
    Sensors:   System Temperatures: cpu: 29.8 C mobo: 27.8 C
               Fan Speeds (RPM): N/A
    Info:      Processes: 236 Uptime: 1h 13m Memory: 7.68 GiB used: 4.39 GiB (57.2%) Init: systemd runlevel: 5 Compilers:
               gcc: 7.3.0 Shell: bash v: 4.4.19 inxi: 3.0.27
    ```



