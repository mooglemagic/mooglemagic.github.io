## To-do

~~1. Get rid of fieldset styles~~

2. Does every section need a fieldset?

~~3. How can I add margin between a label and input if input is embedded in label?~~ 
*added margin (via css variable) to input and other relevant elements*

~~4. How do I keep textarea at the width of the form if I define its length by the cols attribute?~~

*I just removed the cols attribute and used css to manually set width...seems to work?!*

5. Use rem for text?
6. In dropdown boxes the first options of "Select current role" should not be an option!
~~7. Go through FCC form tutorial~~ 

8. Select and input have different widths grrr...


## Lessons Learnt
1. Give all radio buttons the same name attribute so only one can be selected by the user
2. The select element is a container of option elements. It shows these in a dropdown menu. Each options element must have a value attribute to provide meaning when the form is sent otherwise their content is sent instead of value. The same is true of checkboxes.
3. Adding css variables using :root