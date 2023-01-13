<?php require("init.php"); //echo $stripe_pk;?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Sergey Naumkin, Russian Business Lawyer, Stripe Payments">
    <meta name="author" content="Sergey Naumkin">
    <meta name="keywords" content="Sergey, Naumkin, Russian, Business, Lawyer, Stripe, Payments">

    <!-- Title Page-->
    <title>Sergey Naumkin - Russian Business Lawyer | Stripe Payments Platform</title>

    <!-- Icons font CSS-->
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="pcss/main.css" rel="stylesheet" media="all">

</head>

<body>
<!-- fname,lname,email,phone,fee note refrence, amount to be paid -->
    <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div class="wrapper wrapper--w680">
            <div class="card card-1">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Card Payments</h2>
                    <form method="POST" id="payment-form">
                        <input type="hidden" name="stripeToken" id="stoken" value="" />
                        <div class="input-group">
                            <input class="input--style-1" type="text" id="fname" placeholder="First Name" name="fname" required>
                        </div>
                        <div class="input-group">
                            <input class="input--style-1" type="text" id="lname" placeholder="Last Name" name="lname" required>
                        </div>
                        <div class="input-group">
                            <input class="input--style-1" id="email" type="email" placeholder="Email" name="email" required>
                        </div>
                        <div class="input-group">
                            <input class="input--style-1" type="text" placeholder="Phone" id="phone" name="phone">
                        </div>
                        <div class="input-group">
                            <input class="input--style-1" type="text" placeholder="Payment Reference" id="fnote"  name="fnote" >
                        </div>
                        <div class="input-group">
                            <input class="input--style-1" type="number"  id="amount"  placeholder="Amount" name="amount">
                        </div>

                        <div class="input-group" style="border:0px;">
                            <div id="card-element"></div>

                        </div>
                        <div class="error-stripe"></div>    
                        <div class="p-t-20">
                            <button id="card-button" type="button" class="btn btn--radius btn--green" type="submit">
                                Pay Now &nbsp;<label class="loader hide"></label>
                            </button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery JS-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>
    <script type="text/javascript">
        window.ajaxpath = "<?php echo $ajaxpath; ?>";
        window.key = '<?php echo $stripe_public_key; ?>';
        console.log(window.key);
    </script>
    <script src='https://js.stripe.com/v3/'></script>
    <!-- Main JS-->
    <script src="pjs/global.js"></script>

</body>

</html>
<!-- end document-->
