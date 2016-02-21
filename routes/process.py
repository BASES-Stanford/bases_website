def formatString(s):
  return "router.get('/" + s + "', function(req, res, next) {\n\tres.render('" + s + "');\n});\n"

while True:
  try:
    s = raw_input()
    print formatString(s)
  except:
    break