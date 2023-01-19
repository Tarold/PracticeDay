<script>
export default {
  props: ['data'],
};
</script>

<template>
  <div class="show">
    <table>
      <tr>
        <th>{{ data.name }}</th>
        <th>{{ data.sys.country }}</th>
        <th>[{{ data.coord.lon }};{{ data.coord.lat }}]</th>
      </tr>
      <tr>
        <td><font-awesome-icon icon="droplet" /></td>
        <td>humidity</td>
        <td>{{ data.main.humidity }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="temperature-0" /></td>
        <td>temp</td>
        <td>{{ data.main.temp }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="cloud" /></td>
        <td>main</td>
        <td>{{ data.weather[0].main }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="warning" /></td>
        <td>pressure</td>
        <td>{{ data.main.pressure }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="audio-description" /></td>
        <td>description</td>
        <td>{{ data.weather[0].description }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="wind" /></td>
        <td>wind</td>
        <td>{{ data.wind.speed }}</td>
      </tr>
      <tr>
        <td><font-awesome-icon icon="compass" /></td>
        <td>deg</td>
        <td>{{ data.wind.deg }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 0.5rem;
}
th,
td {
  padding: 5px 10px;
}
</style>
