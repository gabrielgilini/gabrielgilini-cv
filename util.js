function getChildrenByProperty(parentNode, propName, propValue, breakOnFirst, recursive)
{
    var children = parentNode.childNodes;
    var results = breakOnFirst ? null : [];
    var propReg = new RegExp('(^|\\s+)'+propValue+'(\\s+|$)');

    for(var i = 0, len = children.length; i < len; ++i)
    {
        // if it is a HTML Element (nodeType == 1)
        if(children[i].nodeType == 1 && propReg.test(children[i][propName]))
        {
            if(breakOnFirst)
            {
                results = children[i];
                break;
            }
            else
            {
                results.push(children[i]);
            }                                           
        }
        if(recursive)
        {
            results = results.concat(getChildrenByProperty(children[i], propName, propValue, breakOnFirst, recursive));
        }
    }
    parentNode = children = null;
    return results;
}