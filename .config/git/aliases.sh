# Some good standards, which are not used if the user
# creates his/her own .bashrc/.bash_profile

# --show-control-chars: help showing Korean or accented characters
alias ls='ls -F --color=auto --show-control-chars'
alias ll='ls -l'

case "$TERM" in
xterm*)
	# The following programs are known to require a Win32 Console
	# for interactive usage, therefore let's launch them through winpty
	# when run inside `mintty`.
	for name in node ipython php php5 psql python2.7
	do
		case "$(type -p "$name".exe 2>/dev/null)" in
		''|/usr/bin/*) continue;;
		esac
		alias $name="winpty $name.exe"
	done
	;;
esac

# custom aliases
# Aliases
alias dt='cd /c/Users/marzouk/Desktop'
alias home='cd /c/Users/marzouk/'
alias tuts='cd /c/xampp/htdocs/tuts'
# alias ii="cmd.exe /C start"
alias ii="powershell.exe ii"
# bare git repo alias for dotfiles
# alias config="/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
alias winconfig="git --git-dir=/c/users/marzouk/.dotfiles/ --work-tree=/c/Users/marzouk"
alias cp="cp -iv"
alias mv="mv -iv"
alias rm="rm -vI"
alias mkd="mkdir -pv"
alias lm="ls -shtr1"
alias c:="cd /c"
alias d:="cd /d"
alias fpath="find -type f | fzf | sed 's/^..//g' | perl -pe 'chomp' | clip.exe"
alias dpath="find -type d | fzf | sed 's/^..//g' | perl -pe 'chomp' | clip.exe"
alias cpath="pwd | perl -pe 'chomp' | clip.exe"
alias df="df -h"
# alias lsalias="grep -in --color -e '^alias\s+*' ~/.zshrc | sed 's/alias //' | grep --color -e ':[a-z][a-z0-9]*'"
alias lsalias="rg '^alias' '/etc/profile.d/aliases.sh' | sed 's/alias //' | rg '^\w+\b'"
