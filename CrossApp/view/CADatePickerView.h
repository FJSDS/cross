//
//  CADatePickerView.h
//  CrossApp
//
//  Created by dai xinping on 14-8-4.
//  Copyright (c) 2014年 CrossApp. All rights reserved.
//

#ifndef __CrossApp__CADatePickerView__
#define __CrossApp__CADatePickerView__

#include <iostream>
#include "CAPickerView.h"

NS_CC_BEGIN

class CADatePickerViewDelegate {
    
public:
    virtual ~CADatePickerViewDelegate() {};
    
    //virtual void didSelectRow(const struct tm& tm) {CC_UNUSED_PARAM(tm);}
    virtual void didSelectRow(const struct tm& tm) {}
};

class CC_DLL CADatePickerView : public CAControl, public CAPickerViewDataSource, public CAPickerViewDelegate {
    
public:
    
    enum class Mode : int
    {
        Time = 0,           // Displays hour, minute, and optionally AM/PM designation depending on the locale setting (e.g. 6 | 53 | PM)
        Date,           // Displays month, day, and year depending on the locale setting (e.g. November | 15 | 2007)
        DateAndTime,    // Displays date, hour, minute, and optionally AM/PM designation depending on the locale setting (e.g. Wed Nov 15 | 6 | 53 | PM)
        CountDownTimer, // Displays hour and minute (e.g. 1 | 53)
    };
    
public:
    static CADatePickerView* create(CADatePickerView::Mode m_mode);
    static CADatePickerView* createWithFrame(const DRect& rect, CADatePickerView::Mode m_mode);
    static CADatePickerView* createWithCenter(const DRect& rect, CADatePickerView::Mode m_mode);
    static CADatePickerView* createWithLayout(const DLayout& layout, CADatePickerView::Mode m_mode);
    
    CADatePickerView(CADatePickerView::Mode m_mode);
    virtual ~CADatePickerView();
    
    virtual bool init();
    virtual void onEnter();
    virtual void onExit();
    
public:
    void setDate(int year, int month, int day, bool animated);
    
    CC_SYNTHESIZE(CADatePickerViewDelegate*, m_pDelegate, Delegate);
    
protected:
    virtual unsigned int numberOfComponentsInPickerView(CAPickerView* pickerView);
    virtual unsigned int numberOfRowsInComponent(CAPickerView* pickerView, unsigned int component);
    virtual float widthForComponent(CAPickerView* pickerView, unsigned int component);
    virtual float rowHeightForComponent(CAPickerView* pickerView, unsigned int component);
    virtual const char* titleForRow(CAPickerView* pickerView, unsigned int row, unsigned int component);
    
    virtual void didSelectRow(CAPickerView* pickerView, unsigned int row, unsigned int component);
    void setMode(CADatePickerView::Mode mode);
    
private:
    CAPickerView* m_pPickerView;
    struct tm m_tTM;
    CADatePickerView::Mode m_eMode;
    bool isSetDate;
};

NS_CC_END

#endif /* defined(__CrossApp__CADatePickerView__) */
