# Classic GUI for SickRage/SickChill (former SickBeard)

I love Sickbeard/SickRage development, but lately the UI has been gone sideways in my honest opinion. I liked the way it was. SickBeard original logo is perfect and the green colors were once a bomb. With this theme you can enjoy the classic UI again without any shades of blue.

![Screenshot (poster view)](https://raw.githubusercontent.com/ronilaukkarinen/SickRage-Classic-gui/master/src/screenshot_2.png "Screenshot")

## Usage (for old SickRage)

Just clone the repo and replace the files. This causes problems with SickRage updates, but you can easily update with this routine:

	git reset --hard
	git clean -f
	git pull

## Installation (for old SickRage)

Quick installation without template files:

    cp -Rv ~/SickRage-Classic-gui/gui/slick/images ~/SickRage/gui/slick/

Installation with template files after cloning into home (use with caution! may not work if my theme is behind current SickRage version):

    cp -Rv ~/SickRage-Classic-gui/gui ~/SickRage/

After replacing the files and restarting you can activate the theme by editing config `theme_name = classic` or going to **Settings > General > UI Theme Settings** and selecting Classic there.

## Installation (for latest SickChill)

1. Get [sickchill.css](https://raw.githubusercontent.com/ronilaukkarinen/SickRage-Classic-gui/master/sickchill.css)
2. Go to **General > Interface > Stylesheet File Path** and select sickchill.css
