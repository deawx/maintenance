        
        var cate_no ="";
        var cate = "";
        $("#DP_content").append($("<div class='form-group'>หมวดครุภัณฑ์ : <select name='pdgroup' class='form-control select2' id='pdgroup' required></select>")
                        ,$("<div class='form-group'>ประเภทครุภัณฑ์ : <select name='pdcate' class='form-control select2' id='pdcate' required></select>")
                        //,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='head_no' id='head_no' style='width: 100px'> <b id='cate_no'></b> <INPUT TYPE='text' NAME='num' id='num' style='width: 50px'></div>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='pd_number' id='pd_number' class='form-control'></div>")
                        ,$("<div class='form-group'>ชื่อครุภัณฑ์ : <INPUT TYPE='text' NAME='name' id='name' class='form-control' placeholder='เช่น printer brother MFC-J5910DW'></div>")
                        ,$("<div class='form-group'>ยี่ห้อ : <INPUT TYPE='text' NAME='brand' id='brand' class='form-control'></div>")
                        ,$("<div class='form-group'>หมายเลขเครื่อง : <INPUT TYPE='text' NAME='serial' id='serial' class='form-control'></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <select name='pd_status' class='form-control select2' id='pd_status' required></select>"));
                $("select#pdgroup").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/group_Data.php', function (GD) {
                                    for (var key in GD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pdgroup").append($("<option value='"+GD[key].group_id+"'> "+GD[key].group_name+" </option>"));
                                    }$(".select2").select2();
                                });    
                $("select#pdcate").append($("<option value=''> เลือกประเภทครุภัณฑ์ </option>"));
                                $("select#pdgroup").change(function () {
                                    
                                $.getJSON('JsonData/cate_Data.php',{data: $("#pdgroup").val()}, function (CD) {
                                    for (var key in CD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pdcate").append($("<option value='"+CD[key].category_id+"'> "+CD[key].category_name+" </option>"));
                                        }
                                        $(".select2").select2();
                                    
                                }); 
                            }); 
                                    
                                    /*$("select#pdcate").change(function () {
                                        cate_no = $("#pdcate").val();
                                        cate = cate_no.split('_');
                                    $("#cate_no").text(cate[1]);
                                     });*/
                
                $("select#pd_status").append($("<option value=''> เลือกสถานะครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/pdstatus_Data.php', function (SD) {
                                    for (var key in SD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pd_status").append($("<option value='"+SD[key].pd_status_id+"'> "+SD[key].pd_status+" </option>"));
                                        }
                                        $(".select2").select2();
                            });
                            
        $("#DSP_content").append($("<div class='form-group'>ผู้ขาย : <select name='com_id' class='form-control select2' id='com_id' required></select>")
                        ,$("<div class='form-group'>ราคาซื้อ : <INPUT TYPE='text' NAME='price' id='price' class='form-control'>")
                        ,$("<div class='form-group'>ชนิดเงิน : <select name='montype_id' class='form-control select2' id='montype_id' required></select>")
                        ,$("<div class='form-group'>วิธีซื้อ : <select name='mon_id' class='form-control select2' id='mon_id' required></select>")
                        ,$("<div class='form-group'>ปีที่ซื้อ : <select name='yearbuy' class='form-control select2' id='yearbuy' required></select>"));      
                $("select#com_id").append($("<option value=''> เลือกผู้ขาย </option>"));
                                $.getJSON('JsonData/comp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#com_id").append($("<option value='"+CmD[key].comp_id+"'> "+CmD[key].comp_name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#montype_id").append($("<option value=''> เลือกชนิดเงินงบ </option>"));
                                $.getJSON('JsonData/montype_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#montype_id").append($("<option value='"+CmD[key].id+"'> "+CmD[key].name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#mon_id").append($("<option value=''> เลือกวิธีซื้อ </option>"));
                                $.getJSON('JsonData/methodsale_Data.php', function (MD) {
                                    for (var key in MD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#mon_id").append($("<option value='"+MD[key].mon_id+"'> "+MD[key].mon_name+" </option>"));
                                    }$(".select2").select2();
                                });   
                $("select#yearbuy").append($("<option value=''> เลือกปีที่ซื้อ </option>"));
                                var d = new Date();
                                var yearT = (d.getFullYear()+543);
                                     for (var i = yearT;i >= yearT-15;i--) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#yearbuy").append($("<option value='"+i+"'> "+i+" </option>"));
                                    }$(".select2").select2();
                                    
        $("#DWP_content").append($("<div class='form-group'>วันที่ลงทะเบียน : <input type='text' name='data' id='datepicker1' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เริ่มประกัน : <input type='text' name='data' id='datepicker2' class='form-control' readonly required>")
                        ,$("<div class='form-group'>เลขที่สัญญา : <input type='text' name='ct_number' id='ct_number' class='form-control'>")
                        ,$("<div class='form-group'>จำนวนเดือนที่รับประกัน : <input type='text' name='nbmoth_insur' id='nbmoth_insur' class='form-control'>"));
                        
        $("#DPP_content").append($("<div class='form-group'>งาน : <select name='dep_id' class='form-control select2' id='dep_id' required></select>")
                        ,$("<div class='form-group'>วันที่ติดตั้ง : <input type='text' name='data' id='datepicker3' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เคลื่อนย้าย : <input type='text' name='data' id='datepicker4' class='form-control' readonly required>")
                        ,$("<div class='form-group'>ผู้รับผิดชอบ : <select name='rp_person' class='form-control select2' id='rp_person' required></select>")
                        ,$("<div class='form-group'>หมายเหตุ : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='หมายเหตุ' name='note' id='note'></textarea>"));                
                        
                $("select#dep_id").append($("<option value=''> เลือกงาน </option>"));
                                $.getJSON('JsonData/Dep_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#dep_id").append($("<option value='"+CmD[key].depId+"'> "+CmD[key].depName+" </option>"));
                                    }$(".select2").select2();
                                }); 
                $("select#rp_person").append($("<option value=''> เลือกผู้รับผิดชอบ </option>"));
                                $.getJSON('JsonData/emp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#rp_person").append($("<option value='"+CmD[key].empno+"'> "+CmD[key].fullname+" </option>"));
                                    }$(".select2").select2();
                                });
                                
                        var DP = new DatepickerThai();
                            DP.GetDatepicker('#datepicker1');
                            DP.GetDatepicker('#datepicker2');
                            DP.GetDatepicker('#datepicker3');
                            DP.GetDatepicker('#datepicker4');
            $("div#add_pd").append("<button type='submit' class='btn btn-primary' id='APsubmit'>บันทึก</button>");
            $("button#APsubmit").click(function () {
        				$.ajax({
					   type: "POST",
					   url: "process/prcprods.php",
					   data: {pdgroup:$("#pdgroup").val()
                                                 ,pdcate:$("#pdcate").val()
                                                 ,pd_number:$("#pd_number").val()
                                                 ,name:$("#name").val()
                                                ,brand:$("#brand").val()
                                                ,serial:$("#serial").val()
                                                ,pd_status:$("#pd_status").val()
                                                ,com_id:$("#com_id").val()
                                                ,price:$("#price").val()
                                                ,montype_id:$("#montype_id").val()
                                                ,mon_id:$("#mon_id").val()
                                                ,yearbuy:$("#yearbuy").val()
                                                ,regis_date:$("#datepicker1").val()
                                                ,date_stinsur:$("#datepicker2").val()
                                                ,ct_number:$("#ct_number").val()
                                                ,nbmoth_insur:$("#nbmoth_insur").val()
                                                ,dep_id:$("#dep_id").val()
                                                ,lnstalldate:$("#datepicker3").val()
                                                ,movingdate:$("#datepicker4").val()
                                                ,rp_person:$("#rp_person").val()
                                                ,note:$("#note").val()
                                                ,data0:'add_prods'},
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_prods.php');
					   }
					 });
        });