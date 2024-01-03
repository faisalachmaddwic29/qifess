<template>
    <div>
        <v-data-table-server
        v-model:items-per-page="__.itemsPerPage"
        :headers="__.headers"
        :items-length="__.totalItems"
        :items="__.serverItems"
        :loading="__.loading"
        :search="__.search"
        item-value="name"
        @update:options="loadItems"
        :item-selectable="__.selected"
        show-select
    >
    <template v-slot:header.email_validation_at>
      <v-icon color="grey">mdi-email</v-icon>
    </template>
    <template v-slot:item.photo="{ value }">
      <v-avatar size="30">
          <v-img src="~/assets/images/user.png" :alt="value" />
      </v-avatar>
      </template>
      <template v-slot:item.role="{ value }">
        <v-chip size="x-small" :color="getColorChip(value.color)" class="font-weight-bold">
          {{ value.alias }}
        </v-chip>
      </template>
      <template v-slot:item.email_validation_at="{ value }">
        <v-icon :color="value ? 'blue' : 'grey'">{{ value ? 'mdi-email-check' : 'mdi-email' }}</v-icon>
      </template>
  </v-data-table-server>
    </div>
</template>
<script setup>
  const __ = ref({
      selected : [],
      itemsPerPage: 20,
      headers: [
        {
          title: '#',
          align: 'center',
          sortable: false,
          key: 'photo',
        },
        { title: 'Role', key: 'role' },
        { title: 'UID', key: 'id' },
        { title: 'Username', key: 'username' },
        { title: 'Name', key: 'name' },
        { title: 'Email', key: 'email' },
        { title: 'Vendor', key: 'vendor.alias' },
        { title: 'Vendor Area', key: 'vendor_area.name' },
        { title: 'Vendor Grouping', key: 'vendor_group.name' },
        { title: 'Client', key: 'owner_area.alias' },
        { title: 'Email', key: 'email_validation_at' },
        { title: 'Last Active', key: 'last_active' },
        { title: '#'},
      ],
      search: '',
      serverItems: [],
      loading: true,
      totalItems: 0,
    })

    const loadItems = async ({ page, itemsPerPage, sortBy }) => {
        __.value.loading = true
        const { data, pending, error, refresh } = await fetchApi('users',{
          method: 'GET',
          query: {
            page: page,
            limit: itemsPerPage,
          }
        })
        if (data.value) {
          __.value.serverItems = data.value.data.rows
          __.value.totalItems = data.value.data.total_rows
          __.value.loading = false
          console.log(data.value);
        }
      }

      const getColorChip = (color) => {
        return '#' + color
      }
</script>
