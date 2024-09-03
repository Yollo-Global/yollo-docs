run:
	nodemon -w spec -e yaml -x yarn start

build:
	yarn build
	git add .
	git commit -m "new documentation generated"
	git push origin master

.PHONY: run build
.DEFAULT_GOAL := run
