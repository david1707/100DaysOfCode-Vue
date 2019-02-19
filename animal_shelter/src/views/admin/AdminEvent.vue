<template>
    <div class="admin-event">
        <div class="container">
        <h2 class="center">Manage events</h2>
            <table class="highlight centered"> 
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="hoverable">
                        <td>Meeting at the park</td>
                        <td>7398 George Road Mokena, IL 60448</td>
                        <td>26 February</td>
                        <td>18:00 - 20:00</td>
                        <td class="actions"><i class="material-icons view">visibility</i><i class="material-icons edit">edit</i><i class="material-icons delete">delete</i></td>
                    </tr>
                    <tr class="hoverable">
                        <td>Turtle eggs hatching</td>
                        <td>22 Essex Dr. Lakeland, FL 33801</td>
                        <td>30 March</td>
                        <td>8:00 - 14:00</td>
                        <td class="actions"><i class="material-icons view">visibility</i><i class="material-icons edit">edit</i><i class="material-icons delete">delete</i></td>
                    </tr>
                    <tr class="hoverable">
                        <td>Parrot Fest</td>
                        <td>406 Ann Street Muskogee, OK 74403</td>
                        <td>12 March</td>
                        <td>12:00 - 14:30</td>
                        <td class="actions"><i class="material-icons view">visibility</i><i class="material-icons edit">edit</i><i class="material-icons delete">delete</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'admin-events'
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20vh;

        .view {
            color: #009688
        }

        .edit {
            color: royalblue;
        }

        .delete {
            color: orangered;
        }
    }

</style>


