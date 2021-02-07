# Changelog

## Terminal Behavior Setup -> Input area

**by Chuba 2020/02/07

### Goals
- Giving the web-based Terminal the look and feel of a computer terminal  
Currently, it provides a prompt that, like a computer terminal's, cannot be edited

### Changes in the pipeline ( todo after this merge )
- Process the commands in the termnal input when ENTER is pressed if the text 
in the input does not end with a backslash (\) else create a newline to continue text input
- Go through a history of typed commands when the up or down 