<template>
     <div v-resize="onResize">
      <v-data-table-server
        :height="__.tableHeight"
        fixed-header
        fixed-footer
        v-model:items-per-page="__.itemsPerPage"
        :headers="headers"
        :items-length="__.totalItems"
        :items="__.serverItems"
        :loading="__.loading"
        :search="__.search"
        item-value="name"
        @update:options="loadItems"
      >
      <template v-slot:thead>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="__.request_method"
              density="compact"
              class="ma-2"
              variant="outlined"
              label="Search method."
              append-inner-icon="mdi-magnify"
              single-line
            ></v-text-field>
          </td>
          <td></td>
          <td>
            <v-text-field
              v-model="__.response_status"
              density="compact"
              class="ma-2"
              variant="outlined"
              label="Search response code."
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </td>
        </tr>
      </template>
      <template v-slot:bottom>
        <div class="d-flex justify-space-between">
            <v-sheet>
                test
            </v-sheet>
            <v-sheet>
                <v-data-table-footer></v-data-table-footer>
            </v-sheet>
        </div>
    </template>
    </v-data-table-server>
  </div>
</template>



<script setup>
    const headers = ref([
        {
          title: 'request_url',
          align: 'start',
          key: 'request_url',
        },
        { title: 'request_method', key: 'request_method', align: 'end' },
        { title: 'response_time', key: 'response_time', align: 'end' },
        { title: 'response_status', key: 'response_status', align: 'end' },
        { title: 'created_at', key: 'created_at', align: 'end' },
      ])

    const __ = ref({
      itemsPerPage: 10,
      search: '',
      request_method: '',
      response_status: '',
      serverItems: [],
      loading: true,
      totalItems: 0,
      tableHeight: 0,
    })

    const onResize = () => {
      __.value.tableHeight =
        window.innerHeight - 170;
    }

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3Jlc2EtZ29kYW0ub21naW5kby5jb21cL2FwaVwvYWRtaW5cL2xvZ2luIiwiaWF0IjoxNzAxMzUzNTc0LCJuYmYiOjE3MDEzNTM1NzQsImp0aSI6IjY3enB5aWRPY2s4MHd4bUwiLCJzdWIiOjEsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkifQ.H4ePWCL5giWDIYSlGjykwKqbFBUelogckatttGWvM7c"
    const loadItems = async ({page, itemsPerPage, sortBy,search})  => {
        __.value.loading = true
        let query = { page: page ,per_page:itemsPerPage,sort_by:'',sort_order:''}
        if (sortBy.length) {
          query.sort_by = sortBy[0].key
          query.sort_order = sortBy[0].order
        }

         await useFetch('http://127.0.0.1:8001/api/admin/log/api', {
            query : query,
            caches: false,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
                // ...options?.headers,
            },
        }).then(({ data, pending, error, refresh })=>{
            __.value.serverItems = data.value.data.data
            __.value.totalItems = data.value.data.total
            __.value.loading = false
          });
      }
</script>
