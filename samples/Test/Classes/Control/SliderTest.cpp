
#include "SliderTest.h"
#include "CDUIShowAutoCollectionView.h"

int SliderNum = 0;

SliderTest::SliderTest()
{
    CADrawerController* drawer = (CADrawerController*)CAApplication::getApplication()->getRootWindow()->getRootViewController();
    drawer->setTouchMoved(false);
}

SliderTest::~SliderTest()
{
    CADrawerController* drawer = (CADrawerController*)CAApplication::getApplication()->getRootWindow()->getRootViewController();
    drawer->setTouchMoved(true);
    SliderNum = 0;
}

void CDUIShowAutoCollectionView::SliderRightBtnRightcallback(CAButton* btn)
{
    if (showSliderNavigationBar >= 1)
    {
        showSliderNavigationBar = 0;
        SliderNum = showSliderNavigationBar;
    }
    else
    {
        SliderNum = ++showSliderNavigationBar;
    }
    SliderTest* ViewContrllerSliderTest = new SliderTest();
    ViewContrllerSliderTest->init();
    ViewContrllerSliderTest->setNavigationBarItem(SliderNavigationBar);
    ViewContrllerSliderTest->autorelease();
    RootWindow::getInstance()->getRootNavigationController()->replaceViewController(ViewContrllerSliderTest, false);
}

void SliderTest::viewDidLoad()
{
    if (SliderNum == 0)
    {
        CAView* view1 = CAView::createWithLayout(DLayoutFill);
        view1->setColor(CAColor4B::GRAY);
    
        sliderValue1 = CALabel::createWithLayout(DLayout(DHorizontalLayout_L_R(100, 100), DVerticalLayout_T_H(300, 50)));
        sliderValue1->setColor(ccc4(51,204,255,255));
        sliderValue1->setText("0");
        sliderValue1->setFontSize(30);
        sliderValue1->setTextAlignment(CATextAlignment::Center);
        sliderValue1->setVerticalTextAlignmet(CAVerticalTextAlignment::Center);
        view1->addSubview(sliderValue1);
    
        CASlider* slider1 = CASlider::createWithLayout(DLayout(DHorizontalLayout_L_R(120, 120), DVerticalLayout_T_H(500, 56)));
        slider1->setTarget([=](float v)
        {
            char value[20];
            sprintf(value, "%.02f%%", v * 100);
            sliderValue1->setText(value);
        });
        view1->addSubview(slider1);
        this->getView()->addSubview(view1);
    }
    else
    {
        CAView* view2 = CAView::createWithLayout(DLayoutFill);
        view2->setColor(CAColor4B::GRAY);

        sliderValue2 = CALabel::createWithLayout(DLayout(DHorizontalLayout_L_R(100, 100), DVerticalLayout_T_H(300, 50)));
        sliderValue2->setColor(ccc4(51, 204, 255, 255));
        sliderValue2->setText("0");
        sliderValue2->setFontSize(30);
        sliderValue2->setTextAlignment(CATextAlignment::Center);
        sliderValue2->setVerticalTextAlignmet(CAVerticalTextAlignment::Center);
        view2->addSubview(sliderValue2);
    
        CASlider* slider2 = CASlider::createWithLayout(DLayout(DHorizontalLayout_L_R(120, 120), DVerticalLayout_T_H(500, 56)));
        slider2->setTag(101);
        slider2->setTrackHeight(6);
        slider2->setMaxTrackTintImage(CAImage::create("image/slider_max_track.png"));
        slider2->setMinTrackTintImage(CAImage::create("image/slider_min_track.png"));
        slider2->setThumbTintImage(CAImage::create("image/slider_indicator.png"));
        slider2->setTarget([=](float v)
        {
            char value[20] = "";
            sprintf(value, "%.02f%%", v * 100);
            sliderValue2->setText(value);
        });
        view2->addSubview(slider2);
    
        this->getView()->addSubview(view2);
    }
}

void SliderTest::viewDidUnload()
{
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}
