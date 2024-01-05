.PHONY : dev clean

dev:
	@osascript -e 'tell application "System Events" to keystroke "source env/bin/activate" & return'
	@osascript -e 'tell application "System Events" to keystroke "cd server" & return'
	@osascript -e 'tell application "System Events" to keystroke "python3 manage.py runserver" & return'
	@osascript -e 'tell application "System Events" to keystroke "`" using {control down, shift down}'
	@osascript -e 'tell application "System Events" to keystroke "cd client" & return'
	@osascript -e 'tell application "System Events" to keystroke "npm start" & return'

clean:
	@echo "Flushing or clearing all running ports..."
	-@lsof -i :8000 -sTCP:LISTEN -t | xargs -r kill
	-@pkill -f "node"                                 
