migrations:
	@osascript -e 'tell application "System Events" to keystroke "python3 manage.py makemigrations" & return'

migrate:
	@osascript -e 'tell application "System Events" to keystroke "python3 manage.py migrate" & return'

run:
	@osascript -e 'tell application "System Events" to keystroke "python3 manage.py runserver" & return'

.PHONY : migrate migrations run