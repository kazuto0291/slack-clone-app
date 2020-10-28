<template>
  <div class="container">
    <div class="chats-layout">
      <Messages :messages="messages"/>
    </div>
    <div class="input-layout">
      <Chat-form />
    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import {db} from '~/plugins/firebase'


export default {
  components: {
    Messages,
    ChatForm
  },
  data() {
    return {
      messages: []
    }
  },
  mounted () {
    const channelId = this.$route.params.id
    db.collection('channels').doc(channelId).collection('message').orderBy('createdAt')
    .onSnapshot((snapshot) => {//snapshotはある時点におけるデータべ=すのコピーデータのようなもの
      snapshot.docChanges().forEach((change) => {//snapshot.docChanges()でshapshotから変更点を習得する
        const doc = change.doc
        if (change.type === 'added') {//変更のデータが更新されたときのみ追加する
          this.messages.push({id: doc.id, ...doc.data()})
        }
      })
    })
  }
}
</script>

<style  scoped>

.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  height: 10%;
}





</style>
