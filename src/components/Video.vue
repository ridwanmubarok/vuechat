<template>
  <vue-jitsi-meet ref="jitsiRef" domain="meet.jit.si" :options="jitsiOptions">
  </vue-jitsi-meet>
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
        roomName: 'some-room-name',
        noSSL: false,
        userInfo: {
          email: 'user@email.com',
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
  },
};
</script>