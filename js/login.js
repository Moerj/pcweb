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
    var $changeBtn = $('#btn-changePwd')
    var $changeName = $('#changePwd-username')
    var $changeOldPwd = $('#changePwd-oldpassword')
    var $changeNewPwd = $('#changePwd-password')
    var $changeRepassword = $('#changePwd-repassword')
    var $changeCode = $('#changePwd-code')

    // 显示/隐藏密码功能
    function togglePwd($input) {
        var container = $input.parent()
        var $toggle = $('<span class="togglePwd"><i class="fa fa-eye" title="显示/隐藏"></i></span>')
        container.append($toggle);
        $toggle.hover(function () {
            $input.attr('type', 'text')
        }, function () {
            $input.attr('type', 'password')
        })

    }
    togglePwd($loginPassword)
    togglePwd($registerPassword)
    togglePwd($registerRepassword)
    togglePwd($changeOldPwd)
    togglePwd($changeNewPwd)
    togglePwd($changeRepassword)

    // 表单界面切换
    $('#to-register').click(function () {
        $('.box').hide();
        $('.register').show();
    })
    $('.to-login').click(function () {
        $('.box').hide();
        $('.login').show();
    })
    $('#to-forget').click(function () {
        $('.box').hide();
        $('.changePwd').show();
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
        else if ($loginPassword.val() == '') {
            invaild = true
            msg = '请输入密码'
        }
        else if ($loginPassword.val().length < 4 || $loginPassword.val().length > 12) {
            invaild = true
            msg = '密码需是：' + $loginPassword.attr('placeholder')
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
        else if ($registerPassword.val() == '') {
            invaild = true
            msg = '请输入密码'
        }
        else if ($registerPassword.val().length < 4 || $registerPassword.val().length > 12) {
            invaild = true
            msg = '密码需是：' + $registerPassword.attr('placeholder')
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

    // 修改密码验证
    $changeBtn.prop('disabled', true)
    $('.changePwd').on('keyup', 'input', function () {
        var invaild = false;
        var msg = ''
        if ($changeName.val() == '') {
            invaild = true
            msg = '请输入用户名'
        }
        else if ($changeOldPwd.val() == '') {
            invaild = true
            msg = '请输入密码'
        }
        else if ($changeOldPwd.val().length < 4 || $changeOldPwd.val().length > 12) {
            invaild = true
            msg = '原密码需是：' + $changeOldPwd.attr('placeholder')
        }
        else if ($changeNewPwd.val().length < 4 || $changeNewPwd.val().length > 12) {
            invaild = true
            msg = '新密码需是：' + $changeNewPwd.attr('placeholder')
        }
        else if ($changeRepassword.val() != $changeNewPwd.val()) {
            invaild = true
            msg = '新密码两次输入密码不一致'
        }
        else if ($changeCode.val() == '') {
            invaild = true
            msg = '请输入验证码'
        }
        if (msg === '') {
            msg = '修改密码'
        }
        $changeBtn.attr({ disabled: invaild }).text(msg)
    })

    // 获取验证码按钮冷却时间
    var cooling = 60
    $('.btn-getmsg').click(function () {
        var _this = $(this)
        var text = _this.text()
        var total = cooling
        _this.prop('disabled', true)
        var timer = setInterval(function () {
            if (cooling <= 0) {
                _this.prop('disabled', false)
                _this.text(text)
                clearInterval(timer)
                cooling = total
                return
            }
            _this.text('喝杯茶 ' + cooling + 's')
            cooling--
        }, 1000)

    })
})()