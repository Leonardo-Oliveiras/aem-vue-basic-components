<template>
    <div id="momentContainer">
      <p id="headerClock">{{ clock }}</p>
      <p id="headerDate">{{ date }}</p>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HeaderMomentNow',
  data () {
    return {
      clock: moment().locale('en').format('LT'),
      date: moment().locale('en').format('LL')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../stylesUtils.scss";

#momentContainer{
  @include display-flex-column();
  @include for-size(min-320) { display: none }
  @include for-size(min-481) { display: none }
    #headerClock{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 144px;
      line-height: 155px;
      text-align: center;
      color: #222222;
      margin: 0;
      @include for-size(min-769) { font-size: 55px; line-height: inherit; }
    }

    #headerDate{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 0;
      text-align: center;
      color: #222222;
      margin: 0;
      @include for-size(min-769) { font-size: 15px; }
    }

}

</style>
