// mc = material cost per pound
// bf = black forest, vc = vanilla cake, rv = red velvet, cc = chocolate cake, ls = lemon sponge cake

mc_bf = 150
mc_vc = 160
mc_rv = 170
mc_cc = 180
mc_ls = 190

// tc = transport cost per pound

tc = 50

// us = utility cost perpound

uc_bf = (mc_bf + tc)*(3/100)
uc_vc = (mc_vc + tc)*(3/100)
uc_rv = (mc_rv + tc)*(3/100)
uc_cc = (mc_cc + tc)*(3/100)
uc_ls = (mc_ls + tc)*(3/100)

// spc = space cost per pound
// stc = staff cost per pound

spc = 60
stc = 70

// ppc = per pound cost

ppc_bf = mc_bf + tc + uc_bf + spc + stc
ppc_vc = mc_vc + tc + uc_vc + spc + stc
ppc_rv = mc_rv + tc + uc_rv + spc + stc
ppc_cc = mc_cc + tc + uc_cc + spc + stc
ppc_ls = mc_ls + tc + uc_ls + spc + stc

document.write("Answer-1") 
document.write("<br>");

document.write(ppc_bf)
document.write(ppc_vc)
document.write(ppc_rv)
document.write(ppc_cc)
document.write(ppc_ls)

// q = quantity in pound

q_bf = 5
q_vc = 7
q_rv = 9
q_cc = 11
q_ls= 13

// tic = total inventory cost

tic_bf = ppc_bf * q_bf
tic_vc = ppc_vc * q_vc
tic_rv = ppc_rv * q_rv
tic_cc = ppc_cc * q_cc
tic_ls = ppc_ls * q_ls

document.write("")
document.write("Answer-2")

document.write(tic_bf)
document.write(tic_vc)
document.write(tic_rv)
document.write(tic_cc)
document.write(tic_ls)

// pc = price

pc_bf = 800
pc_vc = 850
pc_rv = 900
pc_cc = 950
pc_ls = 1000

// spd = sell price after 13% discount

spd_pc_bf = pc_bf - (pc_bf * (13/100))
spd_pc_vc = pc_vc - (pc_vc * (13/100))
spd_pc_rv = pc_rv - (pc_rv * (13/100))
spd_pc_cc = pc_cc - (pc_cc * (13/100))
spd_pc_ls = pc_ls - (pc_ls * (13/100))

document.write("")
document.write("Answer-3")
document.write(spd_pc_bf)
document.write(spd_pc_vc)
document.write(spd_pc_rv)
document.write(spd_pc_cc)
document.write(spd_pc_ls)

// ppp = profit per pound

ppp_bf = spd_pc_bf - ppc_bf
ppp_vc = spd_pc_vc - ppc_vc
ppp_rv = spd_pc_rv - ppc_rv
ppp_cc = spd_pc_cc - ppc_cc
ppp_ls = spd_pc_ls - ppc_ls

document.write("")
document.write("Answer-4")
document.write(ppp_bf)
document.write(ppp_vc)
document.write(ppp_rv)
document.write(ppp_cc)
document.write(ppp_ls)

// tp = total profit

tp_bf = ppp_bf * q_bf
tp_vc = ppp_vc * q_vc
tp_rv = ppp_rv * q_rv
tp_cc = ppp_cc * q_cc
tp_ls = ppp_ls * q_ls

document.write("")
document.write("Answer-5")
document.write(tp_bf)
document.write(tp_vc)
document.write(tp_rv)
document.write(tp_cc)
document.write(tp_ls)

// pp = profit percentage

pp_bf = (tp_bf / tic_bf)*100
pp_vc = (tp_vc / tic_vc)*100
pp_rv = (tp_rv / tic_rv)*100
pp_cc = (tp_cc / tic_cc)*100
pp_ls = (tp_ls / tic_ls)*100

document.write("")
document.write("Answer-6")
document.write(pp_bf)
document.write(pp_vc)
document.write(pp_rv)
document.write(pp_cc)
document.write(pp_ls)
