import { CoverImage, CoverView, Image, View } from "@tarojs/components"
import Taro, { FC } from "@tarojs/taro"
import { useState } from "react"
import '../custom-tab-bar/index.css'
const tabbarConfig = {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/image/icon_component.png",
        selectedIconPath: "/image/icon_component_HL.png",
        text: "首页"
    }, {
        pagePath: "/pages/info/index",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "组件"
    }]
}
const CustomTabBar: FC<any> = () => {
    const [tabbar, setTabbar] = useState<any>(tabbarConfig)
    const switchTab = (selected: number) => {
        Taro.switchTab({
            url: tabbarConfig.list[selected].pagePath
        })
        tabbarConfig.selected = selected
        setTabbar(tabbarConfig)
    }
    return (
        <CoverView className="tab-bar">
            <CoverView className="tab-bar-border"></CoverView>
            {
                tabbar.list.map((item: any, index: number) => {
                    return <CoverView className="tab-bar-item" onClick={() => { switchTab(index) }}>
                        <CoverImage src={tabbar.selected === index ? item.selectedIconPath : item.iconPath}></CoverImage>
                        <CoverView style={{ color: tabbar.selected === index ? tabbar.selectedColor : tabbar.color }}>{item.text}</CoverView>
                    </CoverView>
                })
            }
        </CoverView>
    )
}
export default CustomTabBar