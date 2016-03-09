/**
 * Created by liurui on 15/7/18.
 */
package {
import components.Node;

import mx.utils.UIDUtil;

public class Tool {

    public function Tool() {
    }

    public static function isOverHit(node:Node):Boolean {
        var x:Number = node.mouseX;
        var y:Number = node.mouseY;

        if (x > -Node.xOverFlow && x < Node.SIDE_LENGTH + Node.xOverFlow && y > -Node.yOverFlow && y < Node.SIDE_LENGTH + Node.yOverFlow)
            return true;
        else
            return false;


    }

    public static function createUID():String {
        var uid:String = UIDUtil.createUID();
        uid = uid.replace(/-/g, '');
        return uid;
    }
}
}
