/**
 * Created by zhanglei on 16/8/8.
 */

var iconTag = new Array(
    "image/AlertView.png",
    "image/button.png",
    "image/SegmentedControl.png",

    "image/ImageView.png",
    "image/Scale9ImageView.png",
    "image/indicatorView.png",

    "image/Progress.png",
    "image/slider.png",
    "image/Switch.png",

    "image/Stepper.png",
    "image/Label.png",
    "image/TextField.png",

    "image/TextView.png",
    "image/TabBar.png",
    "image/PageView.png",

    "image/ScrollView.png",
    "image/CollectionView.png",
    "image/CollectionView.png",

    "image/CollectionView.png",
    "image/CollectionView.png",
    "image/ListView.png",

    "image/TableView.png",
    "image/PickerView.png",
    "image/WebView.png",

    "image/GifView.png",
    "image/Video.png",

//    "image/RenderImage.png",
    "image/Video.png",
    "image/CollectionView.png"
);

var CDUIShowAutoCollectionView = ca.CAViewController.extend({
    m_vTitle:null,
    colorArr:null,
    item:null,
    Num:0,
    ctor: function () {
        this._super();
        this.m_vTitle = new Array();
        this.m_vTitle.push("AlertView");
        this.m_vTitle.push("Button");
        this.m_vTitle.push("SegmentedControl");

        this.m_vTitle.push("ImageView");
        this.m_vTitle.push("Scale9ImageView");
        this.m_vTitle.push("IndicatorView");

        this.m_vTitle.push("Progress");
        this.m_vTitle.push("Slider");
        this.m_vTitle.push("Switch");

        this.m_vTitle.push("Stepper");
        this.m_vTitle.push("Label");
        this.m_vTitle.push("TextField");

        this.m_vTitle.push("TextView");
        this.m_vTitle.push("TabBar");
        this.m_vTitle.push("PageView");

        this.m_vTitle.push("ScrollView");
        this.m_vTitle.push("AutoCollectionView(Vertical)");
        this.m_vTitle.push("AutoCollectionView(Horizontal)");

        this.m_vTitle.push("CollectionView");
        this.m_vTitle.push("WaterfallView");
        this.m_vTitle.push("ListView");

        this.m_vTitle.push("TableView");
        this.m_vTitle.push("PickerView");
        this.m_vTitle.push("WebView");

        this.m_vTitle.push("GifView");
        this.m_vTitle.push("VideoPlayer");

//        this.m_vTitle.push("RenderImage");
        this.m_vTitle.push("Animation");


        var p_AutoCollection = ca.CAAutoCollectionView.createWithLayout(DLayoutFill);
        p_AutoCollection.setAllowsSelection(true);
        p_AutoCollection.setCollectionViewDelegate(this);
        p_AutoCollection.setCollectionViewDataSource(this);
        //p_AutoCollection.setScrollViewDelegate(this);
        p_AutoCollection.setHoriCellInterval(3);
        p_AutoCollection.setVertCellInterval(3);

        this.getView().addSubview(p_AutoCollection);

    },
    collectionViewDidSelectCellAtIndexPath: function (collectionView, section, item)
    {
        this.item = item;
        this.Num = 0;
        switch (item)
        {
            case 0:
            {
                var ViewContrllerAlertViewTest = new AlertViewTest();
                ViewContrllerAlertViewTest.init();
                ViewContrllerAlertViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerAlertViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerAlertViewTest, true);
                break;
            }
            case 1:
            {
                var ViewContrllerButtonTest = new ButtonTest();
                ViewContrllerButtonTest.init();
                ViewContrllerButtonTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerButtonTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerButtonTest, true);
                break;
            }
            case 2:
            {
                var ViewContrllerSegmentedControlTest = new SegmentedControlTest();
                ViewContrllerSegmentedControlTest.init();
                ViewContrllerSegmentedControlTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerSegmentedControlTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerSegmentedControlTest, true);
                break;
            }

            case 3:
            {
                //showImageViewNavigationBar = 0;
                var ImageViewNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);

                var ImageViewRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
                ImageViewRightBtn.setTarget(this, this.RightBtnRightcallback);
                ImageViewNavigationBar.addRightButtonItem(ImageViewRightBtn);

                var ViewContrllerImageViewTest = new ImageViewTest(0);
                ViewContrllerImageViewTest.init();
                ViewContrllerImageViewTest.setNavigationBarItem(ImageViewNavigationBar);
                //ViewContrllerImageViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerImageViewTest, true);
                break;
            }
            case 4:
            {
                var ViewContrllerScale9ImageViewTest = new Scale9ImageViewTest();
                ViewContrllerScale9ImageViewTest.init();
                ViewContrllerScale9ImageViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerScale9ImageViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerScale9ImageViewTest, true);
                break;
            }
            case 5:
            {
                //showActivityIndicatorNavigationBar = 0;
                //ActivityIndicatorNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);
                //
                //CABarButtonItem* ActivityIndicatorRightBtn = CABarButtonItem.create("", CAImage.create("source_material/btn_right_white.png"), null);
                //ActivityIndicatorRightBtn.setTarget(this, CAControl_selector(CDUIShowAutoCollectionView.RightBtnRightcallback));
                //ActivityIndicatorNavigationBar.addRightButtonItem(ActivityIndicatorRightBtn);
                //
                //ActivityIndicatorViewTest* ViewContrllerIndicatorViewTest = new ActivityIndicatorViewTest();
                //ViewContrllerIndicatorViewTest.init();
                //ViewContrllerIndicatorViewTest.setNavigationBarItem(ActivityIndicatorNavigationBar);
                //ViewContrllerIndicatorViewTest.autorelease();
                //ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerIndicatorViewTest, true);
                var ImageViewNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);

                var ImageViewRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
                ImageViewRightBtn.setTarget(this, this.RightBtnRightcallback);
                ImageViewNavigationBar.addRightButtonItem(ImageViewRightBtn);

                var ViewContrllerImageViewTest = new ActivityIndicatorViewTest(0);
                ViewContrllerImageViewTest.init();
                ViewContrllerImageViewTest.setNavigationBarItem(ImageViewNavigationBar);
                //ViewContrllerImageViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerImageViewTest, true);


                break;
            }

            case 6:
            {
                var ViewContrllerProgressTest = new ProgressTest();
                ViewContrllerProgressTest.init();
                ViewContrllerProgressTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerProgressTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerProgressTest, true);
                break;
            }
            case 7:
            {
                //showSliderNavigationBar = 0;
                var SliderNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);

                var  SliderRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
                SliderRightBtn.setTarget(this, this.RightBtnRightcallback);
                SliderNavigationBar.addRightButtonItem(SliderRightBtn);

                var ViewContrllerSliderTest = new SliderTest(0);
                ViewContrllerSliderTest.init();
                ViewContrllerSliderTest.setNavigationBarItem(SliderNavigationBar);
                //ViewContrllerSliderTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerSliderTest, true);
                break;
            }
            case 8:
            {
                var ViewContrllerSwitchTest = new SwitchTest();
                ViewContrllerSwitchTest.init();
                ViewContrllerSwitchTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerSwitchTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerSwitchTest, true);
                break;
            }

            case 9:
            {
                var ViewContrllerStepperTest = new StepperTest();
                ViewContrllerStepperTest.init();
                ViewContrllerStepperTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerStepperTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerStepperTest, true);
                break;
            }
            case 10:
            {
                //showLabelNavigationBar = 0;
                var LabelNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);

                var LabelRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
                LabelRightBtn.setTarget(this, this.RightBtnRightcallback);
                LabelNavigationBar.addRightButtonItem(LabelRightBtn);

                var ViewContrllerLabelTest = new LabelTest(0);
                ViewContrllerLabelTest.init();
                ViewContrllerLabelTest.setNavigationBarItem(LabelNavigationBar);
                //ViewContrllerLabelTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerLabelTest, true);
                break;
            }
            case 11:
            {
                var ViewContrllerTextFieldTest = new TextFieldTest();
                ViewContrllerTextFieldTest.init();
                ViewContrllerTextFieldTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerTextFieldTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerTextFieldTest, true);
                break;
            }

            case 12:
            {
                var ViewContrllerTextViewTest = new TextViewTest();
                ViewContrllerTextViewTest.init();
                ViewContrllerTextViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerTextViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerTextViewTest, true);
                break;
            }
            case 13:
            {
                var ViewContrllerTabBarControllerTest = new TabBarControllerTest();
                ViewContrllerTabBarControllerTest.init();
                ViewContrllerTabBarControllerTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerTabBarControllerTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerTabBarControllerTest, true);
                break;
            }
            case 14:
            {
                var ViewContrllerPageViewTest = new PageViewTest();
                ViewContrllerPageViewTest.init();
                ViewContrllerPageViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerPageViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerPageViewTest, true);
                break;
            }

            case 15:
            {
                var ViewContrllerScrollViewTest = new ScrollViewTest();
                ViewContrllerScrollViewTest.init();
                ViewContrllerScrollViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerScrollViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerScrollViewTest, true);
                break;
            }
            case 16:
            {
                //showAutoCollectionVerticalNavigationBar = 0;
                //AutoCollectionVerticalNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);
                //
                //CABarButtonItem* AutoCollectionVerticalRightBtn = CABarButtonItem.create("", CAImage.create("source_material/btn_right_white.png"), null);
                //AutoCollectionVerticalRightBtn.setTarget(this, CAControl_selector(CDUIShowAutoCollectionView.AutoCollectionVerticalRightBtnRightcallback));
                //AutoCollectionVerticalNavigationBar.addRightButtonItem(AutoCollectionVerticalRightBtn);
                //
                var ViewContrllerAutoCollectionViewVerticalTest = new AutoCollectionViewVerticalTest();
                ViewContrllerAutoCollectionViewVerticalTest.init();
                ViewContrllerAutoCollectionViewVerticalTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerAutoCollectionViewVerticalTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerAutoCollectionViewVerticalTest, true);
                break;
            }
            case 17:
            {
                //showAutoCollectionHorizontalNavigationBar = 0;
                //AutoCollectionHorizontalNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);
                //
                //CABarButtonItem* AutoCollectionHorizontalRightBtn = CABarButtonItem.create("", CAImage.create("source_material/btn_right_white.png"), null);
                //AutoCollectionHorizontalRightBtn.setTarget(this, CAControl_selector(CDUIShowAutoCollectionView.AutoCollectionHorizontalRightBtnRightcallback));
                //AutoCollectionHorizontalNavigationBar.addRightButtonItem(AutoCollectionHorizontalRightBtn);
                //
                var ViewContrllerAutoCollectionViewHorizontalTest = new AutoCollectionViewHorizontalTest();
                ViewContrllerAutoCollectionViewHorizontalTest.init();
                ViewContrllerAutoCollectionViewHorizontalTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerAutoCollectionViewHorizontalTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerAutoCollectionViewHorizontalTest, true);
                break;
            }

            case 18:
            {
                var ViewContrllerCollectionViewTest = new CollectionViewTest();
                ViewContrllerCollectionViewTest.init();
                ViewContrllerCollectionViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerCollectionViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerCollectionViewTest, true);
                break;
            }
            case 19:
            {
                var ViewContrllerWaterfallViewTest = new WaterfallViewTest();
                ViewContrllerWaterfallViewTest.init();
                ViewContrllerWaterfallViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerWaterfallViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerWaterfallViewTest, true);
                break;
            }
            case 20:
            {
                var ViewContrllerListViewTest = new ListViewTest();
                ViewContrllerListViewTest.init();
                ViewContrllerListViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerListViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerListViewTest, true);
                break;
            }

            case 21:
            {
                var ViewContrllerTableViewTest = new TableViewTest();
                ViewContrllerTableViewTest.init();
                ViewContrllerTableViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerTableViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerTableViewTest, true);
                break;
            }
            case 22:
            {
                //showPickerViewNavigationBar = 0;
                //PickerViewNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);
                //
                //CABarButtonItem* PickerViewRightBtn = CABarButtonItem.create("", CAImage.create("source_material/btn_right_white.png"), null);
                //PickerViewRightBtn.setTarget(this, CAControl_selector(CDUIShowAutoCollectionView.PickerViewRightBtnRightcallback));
                //PickerViewNavigationBar.addRightButtonItem(PickerViewRightBtn);
                //
                var ViewContrllerPickerViewTest = new PickerViewTest();
                ViewContrllerPickerViewTest.init();
                ViewContrllerPickerViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerPickerViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerPickerViewTest, true);
                break;
            }
            case 23:
            {
                var ViewContrllerWebViewTest = new WebViewTest();
                ViewContrllerWebViewTest.init();
                ViewContrllerWebViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerWebViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerWebViewTest, true);
                break;
            }

            case 24:
            {
                var ViewContrllerGifViewTest = new GifViewTest();
                ViewContrllerGifViewTest.init();
                ViewContrllerGifViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerGifViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerGifViewTest, true);
                break;
            }
//            case 25:
//            {
//                var ViewContrllerFlashViewTest = new FlashViewTest();
//                ViewContrllerFlashViewTest.init();
//                ViewContrllerFlashViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
//                //ViewContrllerFlashViewTest.autorelease();
//                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerFlashViewTest, true);
//                break;
//            }
            case 25:
            {
                var ViewContrllerVideoPlayerControlViewTest = new VideoPlayerControlViewTest();
                ViewContrllerVideoPlayerControlViewTest.init();
                ViewContrllerVideoPlayerControlViewTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                //ViewContrllerVideoPlayerControlViewTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerVideoPlayerControlViewTest, true);
                break;
            }

//            case 26:
//            {
//                var ViewContrllerRenderImageTest = new RenderImageTest();
//                ViewContrllerRenderImageTest.init();
//                ViewContrllerRenderImageTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
//                //ViewContrllerRenderImageTest.autorelease();
//                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerRenderImageTest, true);
//                break;
//            }
            case 26:
            {
                //showViewAnimationNavigationBar = 0;
                var ViewAnimationNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);

                var ViewAnimationRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
                ViewAnimationRightBtn.setTarget(this, this.RightBtnRightcallback);
                ViewAnimationNavigationBar.addRightButtonItem(ViewAnimationRightBtn);

                var ViewContrllerViewAnimationTest = new ViewAnimationTest(0);
                ViewContrllerViewAnimationTest.init();
                ViewContrllerViewAnimationTest.setNavigationBarItem(ViewAnimationNavigationBar);
                //ViewContrllerViewAnimationTest.autorelease();
                ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerViewAnimationTest, true);


                //var ViewContrllerViewAnimationTest = new ViewAnimationTest();
                //ViewContrllerViewAnimationTest.init();
                //ViewContrllerViewAnimationTest.setNavigationBarItem(ca.CANavigationBarItem.create(this.m_vTitle[item]));
                ////ViewContrllerViewAnimationTest.autorelease();
                //ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerViewAnimationTest, true);
                break;
            }
            default:
                break;
        }
    },

    collectionViewDidDeselectCellAtIndexPath: function (collectionView, section, item)
    {
        log("取消选中");
    },
    collectionCellAtIndex: function (collectionView,  cellSize, section, item)
    {
        var p_Cell = collectionView.dequeueReusableCellWithIdentifier("CrossApp");
        if (p_Cell == null)
        {
            p_Cell = ca.CACollectionViewCell.create("CrossApp");
            p_Cell.setAllowsSelected(false);

            var itemImage = ca.CAView.createWithLayout(DLayoutFill);
            itemImage.setTag(99);
            p_Cell.addSubview(itemImage);

            var itemText = ca.CALabel.createWithLayout(DLayout(DHorizontalLayout_L_R(0,0), DVerticalLayout_B_H(5,80)));
            itemText.setTag(100);
            itemText.setFontSize(24);
            itemText.setTextAlignment(ca.CATextAlignment.CATextAlignmentCenter);
            itemText.setVerticalTextAlignmet(ca.CAVerticalTextAlignment.CAVerticalTextAlignmentCenter);
            p_Cell.addSubview(itemText);

            var icon = ca.CAImageView.createWithLayout(DLayout(DHorizontalLayout_L_R(30,30),DVerticalLayout_T_H(20, 123)));
            icon.setImageViewScaleType(ca.CAImageViewScaleType.CAImageViewScaleTypeFitImageInside);
            icon.setTag(101);
            icon.setScale(0.6);
            p_Cell.addSubview(icon);
        }

        var itemImageView = p_Cell.getSubviewByTag(99);
        itemImageView.setColor(ca.color(244, 243, 243, 255));

        var itemText = p_Cell.getSubviewByTag(100);
        itemText.setText(this.m_vTitle[item]);
        itemText.setColor(ca.color(34, 151, 254, 255));

        var icon = p_Cell.getSubviewByTag(101);
        icon.setImage(ca.CAImage.create(iconTag[item]));
        
        return p_Cell;
    },

    collectionViewSizeForItemAtIndexPath: function (collectionView, section, item)
    {
        return ca.dsize(230, 230);
    },

    numberOfItemsInSection: function (collectionView, section)
    {

        return this.m_vTitle.length;
    },

    numberOfSections: function (collectionView)
    {
        return 1;
    },
    RightBtnRightcallback:function(control,point)
    {

        this.Num++;

        var ImageViewNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[this.item]);

        var ImageViewRightBtn = ca.CABarButtonItem.create("", ca.CAImage.create("source_material/btn_right_white.png"), null);
        ImageViewRightBtn.setTarget(this, this.RightBtnRightcallback);
        ImageViewNavigationBar.addRightButtonItem(ImageViewRightBtn);

        log("ImageViewRightBtnRightcallback======>"+this.Num);
        var ViewContrllerImageViewTest = null;

        switch (this.item)
        {
            case 0:
            {
                break;
            }
            case 1:
            {
                break;
            }
            case 2:
            {
                break;
            }
            case 3:
            {
                ViewContrllerImageViewTest =  new ImageViewTest(this.Num);
                break;
            }
            case 4:
            {
                break;
            }
            case 5:
            {
                ViewContrllerImageViewTest = new ActivityIndicatorViewTest(this.Num);
                break;
            }

            case 6:
            {
                break;
            }
            case 7:
            {
                ViewContrllerImageViewTest = new SliderTest(this.Num);
                //showSliderNavigationBar = 0;
                //SliderNavigationBar = ca.CANavigationBarItem.create(this.m_vTitle[item]);
                //
                //CABarButtonItem* SliderRightBtn = CABarButtonItem.create("", CAImage.create("source_material/btn_right_white.png"), null);
                //SliderRightBtn.setTarget(this, CAControl_selector(CDUIShowAutoCollectionView.SliderRightBtnRightcallback));
                //SliderNavigationBar.addRightButtonItem(SliderRightBtn);
                //
                //SliderTest* ViewContrllerSliderTest = new SliderTest();
                //ViewContrllerSliderTest.init();
                //ViewContrllerSliderTest.setNavigationBarItem(SliderNavigationBar);
                //ViewContrllerSliderTest.autorelease();
                //ca.RootWindow.getRootNavigationController().pushViewController(ViewContrllerSliderTest, true);
                break;
            }
            case 8:
            {
                break;
            }

            case 9:
            {
                break;
            }
            case 10:
            {
                ViewContrllerImageViewTest = new LabelTest(this.Num);
                break;
            }
            case 11:{break;}
            case 12:{break;}
            case 13:{break;}
            case 14:{break;}
            case 15:{break;}
            case 16:{break;}
            case 17:{break;}
            case 18:{break;}
            case 19:{break;}
            case 20:{break;}
            case 21:{break;}
            case 22:{break;}
            case 23:{break;}
            case 24:{break;}
            case 25:{break;}
//            case 26:{break;}
            case 26:
            {
                ViewContrllerImageViewTest = new ViewAnimationTest(this.Num);
                break;
            }
            default:
                break;
        }

        ViewContrllerImageViewTest.init();
        ViewContrllerImageViewTest.setNavigationBarItem(ImageViewNavigationBar);
        //ViewContrllerImageViewTest.autorelease();

        if(this.Num >= ViewContrllerImageViewTest.maxNum)
        {
            this.Num = -1;
        }
        ca.RootWindow.getRootNavigationController().replaceViewController(ViewContrllerImageViewTest, false);
    }
});