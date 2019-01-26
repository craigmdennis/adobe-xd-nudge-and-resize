// Large Nudge Config
const config = {
    largeNudge: 8
}

// Small Resize
function shrinkWidth(selection) {
    objectResize(selection.items, 'width', -1);
}
function extendWidth(selection) {
    objectResize(selection.items, 'width', 1);
}
function shrinkHeight(selection) {
    objectResize(selection.items, 'height', -1);
}
function extendHeight(selection) {
    objectResize(selection.items, 'height', 1);
}

// Large Resize
function largeShrinkWidth(selection) {
    objectResize(selection.items, 'width', -config.largeNudge);
}
function largeExtendWidth(selection) {
    objectResize(selection.items, 'width', config.largeNudge);
}
function largeShrinkHeight(selection) {
    objectResize(selection.items, 'height', -config.largeNudge);
}
function largeExtendHeight(selection) {
    objectResize(selection.items, 'height', config.largeNudge);
}

//  Nudging
function largeNudgeUp(selection) {
    objectResize(selection.items, 'up', config.largeNudge);
}
function largeNudgeRight(selection) {
    objectResize(selection.items, 'right', config.largeNudge);
}
function largeNudgeDown(selection) {
    objectResize(selection.items, 'down', config.largeNudge);
}
function largeNudgeLeft(selection) {
    objectResize(selection.items, 'left', config.largeNudge);
}

// main
function objectResize(selection, command, shift) {
    if (0 === selection.length) {
        console.error('No element selected.')
        return false;
    }

    if('width' === command) {
        selection.forEach(function (obj) {
            const bounds = obj.boundsInParent;
            obj.resize(bounds.width + shift, bounds.height);
        });
    }

    if('height' === command) {
        selection.forEach(function (obj) {
            const bounds = obj.boundsInParent;
            obj.resize(bounds.width, bounds.height + shift);
        });
    }

    if('up' === command) {
        selection.forEach(function (obj) {
            obj.moveInParentCoordinates(0, -config.largeNudge);
        });
    }

    if('right' === command) {
        selection.forEach(function (obj) {
            obj.moveInParentCoordinates(config.largeNudge, 0);
        });
    }

    if('down' === command) {
        selection.forEach(function (obj) {
            obj.moveInParentCoordinates(0, config.largeNudge);
        });
    }

    if('left' === command) {
        selection.forEach(function (obj) {
            obj.moveInParentCoordinates(-config.largeNudge, 0);
        });
    }
}

module.exports = {
    commands: {
        "ShrinkWidth": shrinkWidth,
        "ExtendWidth": extendWidth,
        "ShrinkHeight": shrinkHeight,
        "ExtendHeight": extendHeight,
        "LargeShrinkWidth": largeShrinkWidth,
        "LargeExtendWidth": largeExtendWidth,
        "LargeShrinkHeight": largeShrinkHeight,
        "LargeExtendHeight": largeExtendHeight,
        "LargeNudgeUp": largeNudgeUp,
        "LargeNudgeRight": largeNudgeRight,
        "LargeNudgeDown": largeNudgeDown,
        "LargeNudgeLeft": largeNudgeLeft
    }
};
