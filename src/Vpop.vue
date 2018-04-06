/*
============================================================================================================
=========================================== ~ SAMPLE OPTIONS ~ =============================================
============================================================================================================
                                            color: "white",
                                            backgroundColor: "red",
                                            fontSize: 12,
                                            textAlign: "left",
                                            arrowPlacement: "left",
                                            hOffset: 0,
                                            vOffset: 0,
                                            arrowOffset: 0
============================================================================================================
============================================================================================================
============================================================================================================
*/
<template>
    <div class="tooltip" v-on:mouseover="hoverOn">
        <div class="content"><slot name="content"></slot></div>
        <div :style="style" class="tooltip-text">
            <span :style="arrowStyle" class="arrow"></span>
            <slot name="tooltip-text" />
        </div>
    </div>
</template>

<script>

import { cloneDeep } from 'lodash';

export default {
    name: 'Vpop',
    props: ['options'],
    data() {
        return {
            xCord: 0,
            yCord: 0,
            style: {},
            arrowStyle: {},
            data: cloneDeep(this.options),
            maxWidth: window.innerWidth/2,
            maxHeight: window.innerHeight/2,
            viewPortHeight: window.innerHeight,
            offset: 10
        }
    },
    mounted: function() {
        if(!this.data){
            this.data = {};
        }
        else{
            this.style.background = this.options.backgroundColor;
            this.style.color = this.data.color;
            this.style['font-size'] = this.data.fontSize+"px";
            this.style['text-align'] = this.data.textAlign;
            this.arrowStyle['border-bottom-color'] = this.data.backgroundColor;
        }
    },
    methods: {
        hoverOn(evt){
            let itemWidth = this.$el.children[0].children[0].getBoundingClientRect().width;
            let itemHeight = this.$el.children[0].children[0].getBoundingClientRect().height;
            let tooltipHeight = this.$el.children[1].getBoundingClientRect().height;
            let tooltipWidth = this.$el.children[1].getBoundingClientRect().width;

            this.xCord = this.$el.children[0].children[0].getBoundingClientRect().x;
            this.yCord = this.$el.children[0].children[0].getBoundingClientRect().y;

            if((this.xCord <= this.maxWidth) && (this.yCord > this.maxHeight)){
                this.style.left = this.xCord + (this.data.hOffset || 0) + "px";
                this.style.bottom = this.viewPortHeight - this.yCord + this.offset - (this.data.vOffset || 0) + "px";

                this.arrowStyle.bottom = "-9px";
                this.arrowStyle.left = ((this.data.arrowOffset || 0) + 1) + "px";
                this.arrowStyle.transform = "rotate(180deg)";
            }
            else if((this.xCord <= this.maxWidth) && (this.yCord <= this.maxHeight)){
                this.style.left = this.xCord + (this.data.hOffset || 0) + "px";
                this.style.top = this.yCord + itemHeight - this.offset + (this.data.vOffset || 0) + "px";

                this.arrowStyle.top = "-9px";
                this.arrowStyle.left = ((this.data.arrowOffset || 0) + 1) + "px";
            }
            else if((this.xCord > this.maxWidth) && (this.yCord > this.maxHeight)){
                this.style.bottom = this.viewPortHeight - this.yCord + this.offset - (this.data.vOffset || 0) + "px";
                this.style.left = this.xCord - tooltipWidth + itemWidth + (this.data.hOffset || 0) + "px";

                this.arrowStyle.bottom = "-9px";
                this.arrowStyle.right = (( - this.data.arrowOffset || 0) + 1) + "px";
                this.arrowStyle.transform = "rotate(180deg)";
            }
            else if((this.xCord > this.maxWidth) && (this.yCord <= this.maxHeight)){
                this.style.top = this.yCord + itemHeight - this.offset + (this.data.vOffset || 0) + "px";
                this.style.left = this.xCord - tooltipWidth + itemWidth + (this.data.hOffset || 0) + "px";

                this.arrowStyle.top = "-9px";
                this.arrowStyle.right = (( - this.data.arrowOffset || 0) + 1) + "px";
            }
            // this is needed because the mouseover does not trigger an update in vue
            this.$forceUpdate();
        }
    }
}
</script>
<style lang="scss">

.tooltip {
    --main-bg-color: #000;
    --arrow-size: 5px;
    .tooltip-text{
        position: fixed;
        visibility: hidden;
        opacity: 0;
        font-size: 10px;
        z-index: 999;
        right: 0;
        width: 120px;
        max-width: 200px;
        background: red;
        background: var(--main-bg-color);
        color: #e0e0e0;
        padding: 5px 10px;
        border-radius: 3px;
        margin-top: 25px;
        text-align: left;
        transition:opacity 0.5s, visibility 0s ease;
        .arrow{
            content: '';
            position: absolute;
            z-index: 999;
            border-style: solid;
            border-bottom-width: var(--arrow-size);
            border-top-width: var(--arrow-size);
            border-left-width: var(--arrow-size);
            border-right-width: var(--arrow-size);
            border-bottom-color: var(--main-bg-color);
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }
    .content{
        &:hover + .tooltip-text{
            visibility: visible;
            opacity: 1;
        }
    }
}
</style>
