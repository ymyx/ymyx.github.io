<template>
    <div class="swiper-container" v-if="oldlen">
        <div class="swiper-wrapper" @touchstart="fingerStart($event)"
             @touchmove="fingerMove($event)"
             @touchend="fingerEnd($event)"
             :style="[left,transition]"
             @transitionend="transitionEnd">
            <slot :banner="curBanner">图片的位置</slot>
        </div>
        <div class="swiper-page">
            <span v-for="(item,index) in oldlen" :class="{active:index==num}" :key="item.id"></span>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      banner: {
        type: Array,
        required: true
      },
      time: {
        type: Number,
        default: 3000
      }
    },
    name: "Banner",
    data() {
      return {
        cur: 1,
        num: 0,
        timer: 0,
        btn:true,//是否需要过渡 true为需要，false为不需要
        startX:0,
        moveX:0,
        endX:0,
        startTime:0,
        moveTime:0,
        endTime:0,
        moveing:true,//moving
        delX:0,
        switch:true //开关，默认是打开的可以滑动 如果为false则不可以滑动
      }
    },
    computed: {
      curBanner(){
        var banner = JSON.parse(JSON.stringify(this.banner))
        var first = banner[0],
          last = banner[this.oldlen - 1];
        return [last].concat(banner, first)
      },
      oldlen(){
        return this.banner.length;
      },
      left(){
        return this.moveing?{transform: 'translate3d(' + -this.cur * 100 + '%,0,0)'}:{transform: 'translate3d(' + this.delX + 'px,0,0)'}
      },
      transition(){
        return this.btn?{transition:'transform 0.3s'}:{transition:'none'}
      }
    },
    methods: {
      initBanner() {

      },
      init() {
        this.initBanner();
      },
      autoplay() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.cur++;
          this.num++;
          this.bannerPlay(true);
          this.points();
        }, this.time)
      },
      points(){
        this.num = (this.num + this.oldlen) % this.oldlen;
      },
      transitionEnd() {
        if(this.cur>=this.curBanner.length-1){
          this.cur = 1
          this.bannerPlay(false);
        }else if(this.cur<=0){
          this.cur = this.curBanner.length-2;
          this.bannerPlay(false);
        }
        this.switch = true;
      },
      bannerPlay(btn) {
        this.btn=btn
      },
      stopAutoPlay(){
        clearInterval(this.timer);
      },
      fingerStart(e){
        if(this.switch){
          this.switch = false;
          this.stopAutoPlay();
          this.startX = e.changedTouches[0].pageX;
          this.startTime = e.timestamp;
        }
      },
      fingerMove(e){
        if(this.switch)return;
        this.switch = false;
          this.btn = false;
          var moveX =e.changedTouches[0].pageX;
          var delx = moveX-this.startX;
          this.moveing = false;
          this.delX = -e.target.offsetWidth*this.cur+delx;
      },
      fingerEnd(e){
        if(this.switch)return;
        this.switch = false;
        this.autoplay();
        this.endX = e.changedTouches[0].pageX;
        this.endTime = e.timestamp;
        var dis = this.endX - this.startX;
        this.moveing = true;
        if(Math.abs(dis)>100||(this.endTime-this.startTime<100)){
          if(dis>0){
            this.cur--;
            this.bannerPlay(true);
            this.num--;
            this.points();
          }else{
            this.cur++;
            this.num++;
            this.points()
            this.bannerPlay(true);
          }
        }else{
          this.bannerPlay(true);
        }

      }
    },
    activated(){
      this.autoplay();
    },
    deactivated(){
      this.stopAutoPlay();
    },
    destroyed(){
      this.stopAutoPlay();
    },
    mounted() {
      this.init();
      this.autoplay();
    }
  }
</script>

<style scoped lang="less">
    .swiper-container {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        overflow: hidden;
        height: auto;
        .swiper-wrapper {
            width: 100%;
            height: auto;
            display: flex;
            transform: translate(-100%, 0);
        }
        .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: auto;
        }
        img {
            width: 100%;
            min-width: auto;
            height: auto;
            display: block;
        }
        .swiper-page {
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 100%;
            height: 8px;
            text-align: center;

            span {
                margin: 0 5px;
                vertical-align: top;
                display: inline-block;
                width: 8px;
                height: 8px;
                background: none;
                border: 1px solid #fff;
                border-radius: 8px;

                &.active {
                    background: #fff;
                }
            }
        }
    }
</style>
