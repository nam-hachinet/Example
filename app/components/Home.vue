<template>
  <Page>
    <ActionBar>
      <Label text="Player" fontSize="24" verticalAlignment="center" />
    </ActionBar>

    <ListView for="player in players" @itemTap="onItemTap">
      <v-template>
        <!-- Shows the list item label in the default color and style. -->
        <StackLayout orientation="horizontal">
          <Image
            :src="player.thumb"
            width="40"
            height="40"
            verticalAlignment="center"
          />
          <Label
            :text="player.title"
            fontSize="18"
            verticalAlignment="center"
            style="normal"
          />
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import Detail from "./detail_page/DetailPage";
export default {
  data() {
    return {
      players: [],
    };
  },
  methods: {
    getPlayers() {
      this.$axios
        .get("/sample_list")
        .then((response) => {
          //log json
          //console.log(response.data);
          this.players = response.data;
        })
        .catch((error) => console.log(error));
    },
    onItemTap(e) {
      console.log(e.item.id);
      this.$navigateTo(Detail);
    },
  },
  created() {
    this.getPlayers();
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>


