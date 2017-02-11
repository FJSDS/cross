/**
 * Created by zhanglei on 16/8/3.
 */

var TabBarControllerTest = ca.CAViewController.extend({
    ctor: function () {
        this._super();

        var item1 = ca.CATabBarItem.create("item1", ca.CAImage.create(""), ca.CAImage.create(""));
        var item2 = ca.CATabBarItem.create("item2", ca.CAImage.create(""), ca.CAImage.create(""));
        var item3 = ca.CATabBarItem.create("item3", ca.CAImage.create(""), ca.CAImage.create(""));

        var item = new Array;
        item.push(item1);
        item.push(item2);
        item.push(item3);

        var tabBar = ca.CATabBar.createWithLayout(DLayout(DHorizontalLayoutFill, DVerticalLayout_H_C(98, 0.33)));
        tabBar.setItems(item);
        tabBar.showSelectedIndicator();
        tabBar.setSelectedAtIndex(0);
        tabBar.setTag(100);

        var item4 = ca.CATabBarItem.create("", ca.CAImage.create("image/tab_news_btn_up.png"), ca.CAImage.create("image/tab_news_btn_down.png"));
        var item5 = ca.CATabBarItem.create("", ca.CAImage.create("image/tab_image_btn_up.png"), ca.CAImage.create("image/tab_image_btn_down.png"));
        var item6 = ca.CATabBarItem.create("", ca.CAImage.create("image/tab_mine_btn_up.png"), ca.CAImage.create("image/tab_mine_btn_down.png"));

        var it1 = new Array;
        it1.push(item4);
        it1.push(item5);
        it1.push(item6);

        var tabBar1 = ca.CATabBar.createWithLayout(DLayout(DHorizontalLayoutFill, DVerticalLayout_H_C(98, 0.66)));
        tabBar1.setItems(it1);
        tabBar1.setBackgroundImage(ca.CAImage.create("image/tab_news_bg.png"));
        tabBar1.setSelectedBackgroundColor(ca.color(255,255,255,0));
        tabBar1.setTag(100);
        tabBar1.setSelectedAtIndex(0);

        var view1 = ca.CAView.createWithLayout(DLayout(DHorizontalLayoutFill, DVerticalLayout_H_C(960, 0.5)));
        view1.addSubview(tabBar);
        view1.addSubview(tabBar1);
        view1.setColor(ca.color._getGray());
        this.getView().addSubview(view1);
    },
});