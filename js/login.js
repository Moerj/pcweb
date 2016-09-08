(function () {
    var $loginBtn = $('#btn-login')
    var $loginName = $('#login-username')
    var $loginPassword = $('#login-password')
    var $loginCode = $('#login-code')
    var $registerBtn = $('#btn-register')
    var $registerName = $('#register-username')
    var $registerPassword = $('#register-password')
    var $registerRepassword = $('#register-repassword')
    var $registerCode = $('#register-code')

    $('#to-register').click(function () {
        $('.login').hide();
        $('.register').show();
    })
    $('#to-login').click(function () {
        $('.login').show();
        $('.register').hide();
    })

    // 登录前端验证
    $loginBtn.prop('disabled', true)
    $('.login').on('keyup', 'input', function () {
        var invaild = false;
        var msg = ''
        if ($loginName.val() == '') {
            invaild = true
            msg = '请输入用户名'
        }
        else if ($loginPassword.val()=='') {
            invaild = true
            msg = '请输入密码'
        }
        else if ($loginPassword.val().length < 4 || $loginPassword.val().length > 12) {
            invaild = true
            msg = '密码需是：'+$loginPassword.attr('placeholder')
        }
        else if ($loginCode.val() == '') {
            invaild = true
            msg = '请输入验证码'
        }
        if (msg === '') {
            msg = '登录'
        }

        $loginBtn.attr({ disabled: invaild }).text(msg)

    })

    // 注册前端验证
    $registerBtn.prop('disabled', true)
    $('.register').on('keyup', 'input', function () {
        var invaild = false;
        var msg = ''
        if ($registerName.val() == '') {
            invaild = true
            msg = '请输入用户名'
        }
        else if ($registerPassword.val()=='') {
            invaild = true
            msg = '请输入密码'
        }
        else if ($registerPassword.val().length < 4 || $registerPassword.val().length > 12) {
            invaild = true
            msg = '密码需是：'+$registerPassword.attr('placeholder')
        }
        else if ($registerRepassword.val() != $registerPassword.val()) {
            invaild = true
            msg = '两次输入密码不一致'
        }
        else if ($registerCode.val() == '') {
            invaild = true
            msg = '请输入验证码'
        }
        if (msg === '') {
            msg = '注册'
        }
        $registerBtn.attr({ disabled: invaild }).text(msg)
    })
})()