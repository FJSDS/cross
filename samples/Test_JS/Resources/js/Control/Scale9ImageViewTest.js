/**
 * Created by zhanglei on 16/8/3.
 */
var Scale9ImageViewTest = ca.CAViewController.extend({
    ctor: function () {
        this._super();

        this.getView().setColor(ca.color._getGray());

        var image = ca.CAImageView.createWithLayout(DLayout(DHorizontalLayout_L_R(200, 200), DVerticalLayout_T_H(100, 200)));
        image.setImage(ca.CAImage.create("source_material/btn_rounded_normal.png"));
        this.getView().addSubview(image);

        var s9image = ca.CAScale9ImageView.createWithImage(ca.CAImage.create("source_material/btn_rounded_normal.png"));
        s9image.setLayout(DLayout(DHorizontalLayout_L_R(200, 200), DVerticalLayout_T_H(400, 200)));
        this.getView().addSubview(s9image);
    },
    btncallback: function () {
        log("btncallback-->");
    }
});