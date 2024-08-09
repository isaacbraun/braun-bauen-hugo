# Makefile v0.1

all: build

# https://kylewbanks.com/blog/running-multiple-make-targets-concurrently
run:
	@make -j 2 server tw-watch

build:
	@echo "Bulding for Production"
	@hugo --gc --minify

server:
	@echo "Running Hugo Server"
	@hugo server -D

tw-watch:
	@echo "Watching for Tailwind changes"
	@npx tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --watch

.PHONY: all run build server tw-watch
