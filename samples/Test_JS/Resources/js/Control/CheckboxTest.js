var CheckboxTest = ca.CAViewController.extend({
    ctor: function () {
        this._super();
        this.getView().setColor(ca.color._getGray());

        var box = ca.CACheckbox.createWithLayout(DLayout(DHorizontalLayout_W_C(54, 0.5), DVerticalLayout_H_C(54, 0.25)), ca.CACheckbox.Type.RoundedRect);
        this.getView().addSubview(box);
        box.setTarget(function ( isSelect)
        {
            if (isSelect)
            {
                log("选中");
            }
            else
            {
                log("取消选中");
            }
        });

        var box1 = ca.CACheckbox.createWithLayout(DLayout(DHorizontalLayout_W_C(240, 0.5), DVerticalLayout_H_C(54, 0.5)), ca.CACheckbox.Type.SquareRect);
        this.getView().addSubview(box1);
        box1.setTarget(function ( isSelect)
        {
            if (isSelect)
            {
                log("选中");
            }
            else
            {
                log("取消选中");
            }
        });

        var box2 = ca.CACheckbox.createWithLayout(DLayout(DHorizontalLayout_W_C(240, 0.5), DVerticalLayout_H_C(54, 0.75)), ca.CACheckbox.Type.RoundedRect);
        box2.setTitleStateNormal("未选中");
        box2.setTitleStateSelected("选中");
        this.getView().addSubview(box2);
        box2.setTarget(function ( isSelect)
        {
            if (isSelect)
            {
                log("选中");
            }
            else
            {
                log("取消选中");
            }
        });
    },
});
