#!/bin/bash

sudo watchman watch-del-all
sudo rm -rf node_modules && npm install
sudo rm -fr $TMPDIR/react-*
sudo rm -rf /tmp/haste-map-react-native-packager-*

sudo chmod -R 777 node_module

cd ..
sudo chown -R incito AwesomeProject

cd AwesomeProject
sudo npm run
