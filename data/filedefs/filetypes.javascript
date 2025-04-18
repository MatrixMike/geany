# For complete documentation of this file, please see Geany's main documentation
[styling=C]

[keywords]
# all items must be in one line
primary=break case catch class const continue debugger default delete do else enum export extends false finally for function get if import in Infinity instanceof let NaN new null return set static super switch this throw true try typeof undefined var void while with yield prototype async await from as
secondary=Array Boolean Date Function Math Number Object String RegExp EvalError Error RangeError ReferenceError SyntaxError TypeError URIError constructor prototype decodeURI decodeURIComponent encodeURI encodeURIComponent eval isFinite isNaN parseFloat parseInt

[lexer_properties=C]
# partially handles ES6 template strings
lexer.cpp.backquoted.strings=1

[settings]
# default extension used when saving files
extension=js

# MIME type
mime_type=application/javascript

# these characters define word boundaries when making selections and searching
# using word matching options
#wordchars=_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

# single comments, like # in this file
comment_single=//
# multiline comments
comment_open=/*
comment_close=*/

# set to false if a comment character/string should start at column 0 of a line, true uses any
# indentation of the line, e.g. setting to true causes the following on pressing CTRL+d
# 		#command_example();
# setting to false would generate this
# #		command_example();
# This setting works only for single line comments
comment_use_indent=true

# context action command (please see Geany's main documentation for details)
context_action_cmd=

[indentation]
#width=4
# 0 is spaces, 1 is tabs, 2 is tab & spaces
#type=1

[build-menu]
# %f will be replaced by the complete filename
# %e will be replaced by the filename without extension
FT_02_LB=_Lint
FT_02_CM=jshint "%f"
FT_02_WD=
error_regex=([^:]+): line ([0-9]+), col ([0-9]+)
