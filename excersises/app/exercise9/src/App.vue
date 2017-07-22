<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <label for="firstName"></label>
                    <input type="text" id="firstName" class="form-control" v-model="userData.firstName"/>

                    <label for="lastName"></label>
                    <input type="text" id="lastName" class="form-control" v-model="userData.lastName"/>
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <label for="mail"></label>
                    <input type="text" id="mail" class="form-control" v-model="userData.mail"/>
                    <!-- Password -->
                    <label for="password"></label>
                    <input type="password" id="password" class="form-control" v-model="userData.password"/>
                    <!-- Store Data? Yes/No -->
                    <p>Stored Data?</p>
                    <label for="yes">
                        <input type="radio" id="yes" value="Yes" v-model="storedData">Yes
                    </label>
                    <label for="no">
                        <input type="radio" id="no" value="No" v-model="storedData">Yes
                    </label>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: </p>
                        <p>Mail: </p>
                        <p>Password: </p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',

                },
                storedData: 'Yes'
            }
        }
    }
</script>

<style>
</style>
