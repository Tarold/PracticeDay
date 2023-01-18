<script>
export default {
  props: ['data'],
};
</script>

<template>
  <table>
    <tr>
      <th>{{ data.name }}</th>
      <th>{{ data.sys.country }}</th>
      <th>[{{ data.coord.lon }};{{ data.coord.lat }}]</th>
    </tr>
    <tr>
      <td>water</td>
      <td>humidity</td>
      <td>{{ data.main.humidity }}</td>
    </tr>
    <tr>
      <td>temp</td>
      <td>temp</td>
      <td>{{ data.main.temp }}</td>
    </tr>
    <tr>
      <td>main</td>
      <td>main</td>
      <td>{{ data.weather[0].main }}</td>
    </tr>
    <tr>
      <td>pressure</td>
      <td>pressure</td>
      <td>{{ data.main.pressure }}</td>
    </tr>
    <tr>
      <td>description</td>
      <td>description</td>
      <td>{{ data.weather[0].description }}</td>
    </tr>
    <tr>
      <td>wind</td>
      <td>wind</td>
      <td>{{ data.wind.speed }}</td>
    </tr>
    <tr>
      <td>deg</td>
      <td>deg</td>
      <td>{{ data.wind.deg }}</td>
    </tr>
  </table>
</template>
