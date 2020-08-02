<template>
  <vs-row vs-w="12" vs-justify="center" vs-align="center">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12" >
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
           DayLight Dev
          </h3>
        </div>
        <div slot="media">
          <vue-jitsi-meet ref="jitsiRef" domain="meet.jit.si" :options="jitsiOptions">
          </vue-jitsi-meet>
        </div>
        <div>
          
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button @click="openConfirm()" color="danger" type="gradient">Change Room Name</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import { JitsiMeet } from '@mycure/vue-jitsi-meet';
export default {
  components: {
    VueJitsiMeet: JitsiMeet
  },
  computed: {
    jitsiOptions () {
      return {
        roomName: 'sekolahsmart',
        width: 1000,
        height: 500,
        noSSL: false,
        userInfo: {
          email: 'sekolahsmart@tester.com',
          displayName: 'TESTBOT',
        },
        configOverwrite: {
          enableNoisyMicDetection: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        onload: this.onIFrameLoad
      };
    },
  },
  methods: {
    onIFrameLoad () {
     this.$refs.jitsiRef.addEventListener('participantJoined', this.onParticipantJoined);
    },
    onParticipantJoined () {
    // do stuff
    },
    openConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    },
  },
};
</script>

<style lang="scss">
  .vs-row{
      margin-top: 50px;
  }

</style>