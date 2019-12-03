#! /bin/sh
unclutter -idle 0.5&
chromium-browser --no-default-browser-check --noerrdialogs --kiosk --window-size=1920,1080 --app=file:///home/pi/Desktop/data/maitai.html
