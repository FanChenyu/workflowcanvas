/**
 * Created by liurui on 15/8/14.
 */
var g = new dagre.graphlib.Graph();

// Set an object for the graph label

var graph = {};
graph.rankdir = "LR";
graph.ranksep = 120;
graph.marginy = 50;
g.setGraph(graph);

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function () {
    return {};
});

function setNode(key, obj) {
    g.setNode(key, obj)
}

function setEdge(a, b, o) {
    g.setEdge(a, b, o);
}

function layoutNode() {
    dagre.layout(g);
}

function getNodes() {
    return g.nodes().map(function (v) {
        var r = g.node(v)
        r.id = v
        return r
    })
}

function getEdges() {
    return g.edges().map(function (v) {
        return g.edge(v)
    })

    //return g.edges()
}

var _value;
function setInt(value) {
    if (value == null)
        _value = 0;
    else
        _value = value;


    _value = value == null ? 0 : value;

    _value = value||0;
}