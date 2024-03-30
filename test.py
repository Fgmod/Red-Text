from kivy.app import App
from kivy.uix.button import Button
import kivy
kivy.require('1.9.0')
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.config import Config

Config.set("graphics", "resitable", 0)
Config.set("graphics", "width", 600)
Config.set("graphics", "height", 400)



class It(App):

 def click(self,instance):
     self.label.text = "Спасибо что нажал!"

  #постройка виджетов в окне
 def build(self):
    but_together = BoxLayout()
    grid = GridLayout(cols=1)

    #виджеты
    my_but = Button(text= "Нажми меня срочно!", font_size=30, background_color="cyan", on_press=self.click)
    think_of_name = Button(text= "Не нажимай!", font_size=30, background_color="cyan")
    self.label = Label(text = "Текст", font_size=30)

    grid.add_widget(my_but)
    grid.add_widget(think_of_name)

    grid.add_widget(but_together)
    grid.add_widget(self.label)

    return grid


if __name__ == "__main__":
  It().run()
