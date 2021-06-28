<template>
  <Page class="detail-page">
    <ActionBar title="Detail Player" class="action-bar" />
    <ScrollView orientation="horizontal">
      <StackLayout orientation="horizontal">
        <Lable: text="id" fontSize="18" top="20" textWrap="true"/>
      </StackLayout>
      <TextView text="{{}}" editable="false" fontSize = "18" style="bold"/>
      
    </ScrollView>
  </Page>
</template>



