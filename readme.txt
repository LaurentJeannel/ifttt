creation sous ifttt de scénario

inscription sur le site ifttt

création if (webhook) then.......action désirée    (nom de l'action sera à mettre dans le xml       data.nomprise="xxxxxxxxxxxxxxxx" )

dans le site vous avez ""test"" ou vous trouverez la key à copier dans le js ligne 5

depuis jarvis vous appelez par exemple         friteuse allumé
ce qui enclenche l'appel du script             prise-friteuse-on  sur ifttt


exemple de xml
<item>friteuse allumé<tag>data.nomprise="prise-friteuse-on"</tag></item>
