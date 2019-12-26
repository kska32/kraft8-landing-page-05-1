#!/bin/sh

rm docs/* -rf 
cp build/* docs/ -rf

git add .
git commit -am 'fix image-lazy-load-issue'
git push origin master