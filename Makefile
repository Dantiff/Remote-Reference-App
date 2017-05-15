# Use development settings for running django dev server.
export DJANGO_SETTINGS_MODULE=app.settings

# Installs development requirements.
dev:
	pip install -r requirements.txt
	pip install djangorestframework
	pip install markdown
	pip install django-filter
	pip install django-rest-auth

# Runs development server.
run:
	pip install -r requirements.txt
	python manage.py makemigrations
	python manage.py migrate
	python manage.py runserver

# Creates migrations and migrates database.
# This step depends on `make dev`, however dependency is excluded to speed up dev server startup.
migrate:
	python manage.py makemigrations
	python manage.py migrate

# Builds files for distribution which will be placed in /static/dist
build: prod migrate
	npm run build

# Cleans up folder by removing virtual environment, node modules and generated files.
clean:
	rm -rf node_modules
	rm -rf static/dist

