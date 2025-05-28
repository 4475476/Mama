while True:
    at=float(input("Digite sua at"))
    agh= float(input("Digite a agh"))
    ac = float(input("Digite a Ac"))

    mediafinal= (mediaAc*0.3)+(at*0.5)+(agh*0.2)
    print(f"a media foi {mediafinal}")
    continuar= input("Deseja continuar? Si/No")
    if continuar == 'Si':
        print("Então vaza")
        break