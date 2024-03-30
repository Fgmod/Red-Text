file_path_1 = "C:\\Users\\User\Desktop\Репка.txt"
file_path_2 = "C:\\Users\\Annigillator_99\\OneDrive\\Рабочий стол\\бородино.txt"
file_path_3 = "C:\\Users\\Annigillator_99\\OneDrive\\Рабочий стол\\беседа пьяного с трезвым чертом.txt"
file_path_4 = "C:\\Users\\Annigillator_99\\OneDrive\\Рабочий стол\\косточка.txt"
file_path_5 = "C:\\Users\\Annigillator_99\\OneDrive\\Рабочий стол\\музыкант.txt"




print("Введите номер текста:")
nt = int(input())
if nt == 1:
    def load_text():
        with open(file_path_1, 'r') as file:
            text = file.read()
        return text
    def conduct_test(text):
        questions = {
            "Кто посадил репку?\n1.бабка.\n2.дедка.\n3.внучка.\n" : "2",
            "Кого позвала бабка, чтобы помочь вытянуть репку?\n1.внучка.\n2.жучка.\n3.мышка.\n" : "1",
            "В землю репка села крепко, одному не справиться, а за старым дедом следом хвост длиннющий тянется, все пришли до одного, сколько было их всего?\n1.5.\n2.6.\n3.7.\n" : "2"
        }
        correct_answers = 0
        for question, correct_answer in questions.items():
            user_answer = input(question + ": ")
            if user_answer == correct_answer:
                print("Правильно!")
                correct_answers += 1
            else:
                print("Неправильно!")
        print("Вы ответили правильно на", correct_answers, "из", len(questions), "вопросов.")
        if correct_answers > 1:
            print("Неплохо читаете")
        else:
            print("Читайте внимательнее")
    loaded_text = load_text()
    print(loaded_text)
    conduct_test(loaded_text)
if nt == 2:
    def load_text():
        with open(file_path_2, 'r') as file:
            text = file.read()
        return text
    def conduct_test(text):
        questions = {
            "С какой иностранной армией сражались русские войска при Бородино?\n1.французской.\n2.английской.\n3.американской.\n" : "1",
            "Какая строка принадлежит стихотворению «Бородино»?\n1.«У них в два ряда колья вбиты».\n2.«Кто золою свой чистил клинок».\n3.«Вам не видать таких сражений».\n" : "3",
            "Какой город, спаленный пожаром, был отдан французам?\n1.Великий Новгород.\n2.Москва.\n3.Санкт-Петербург.\n" : "2"
        }
        correct_answers = 0
        for question, correct_answer in questions.items():
            user_answer = input(question + ": ")
            if user_answer == correct_answer:
                print("Правильно!")
                correct_answers += 1
            else:
                print("Неправильно!")
        print("Вы ответили правильно на", correct_answers, "из", len(questions), "вопросов.")
        if correct_answers > 1:
            print("Неплохо читаете")
        else:
            print("Читайте внимательнее!!!")
    loaded_text = load_text()
    print(loaded_text)
    conduct_test(loaded_text)
if nt == 3:
    def load_text():
        with open(file_path_3, 'r') as file:
            text = file.read()
        return text
    def conduct_test(text):
        questions = {
            "Кто выглянул из лампы?\n1.джин.\n2.демон.\n3.черт.\n" : "3",
            "Что Лахматов предложил черту?\n1.водки.\n2.пиво.\n3.ром.\n" : "1",
            "Куда поступили черти, которые бросили ад?\n1.в банк.\n2.в правительство.\n3.в люди.\n" : "3"
        }
        correct_answers = 0
        for question, correct_answer in questions.items():
            user_answer = input(question + ": ")
            if user_answer == correct_answer:
                print("Правильно!")
                correct_answers += 1
            else:
                print("Неправильно!")
        print("Вы ответили правильно на", correct_answers, "из", len(questions), "вопросов.")
        if correct_answers > 1:
            print("Неплохо читаете")
        else:
            print("Читайте внимательнее!!!")
    loaded_text = load_text()
    print(loaded_text)
    conduct_test(loaded_text)
if nt == 4:
    def load_text():
        with open(file_path_4, 'r') as file:
            text = file.read()
        return text

def conduct_test(text):
        questions = {
            "Что купила мама?\n1.яблоки.\n2.молоко.\n3.сливы.\n" : "3",
            "Что Ваня делал со сливами?\n1.играл.\n2.нюхал.\n3.трогал.\n" : "2",
            "Что сделал мальчик со сливой, когда никого не было в горнице?\n1.спрятал.\n2.съел.\n3.выбросил.\n" : "2"
        }
        correct_answers = 0
        for question, correct_answer in questions.items():
            user_answer = input(question + ": ")
            if user_answer == correct_answer:
                print("Правильно!")
                correct_answers += 1
            else:
                print("Неправильно!")
        print("Вы ответили правильно на", correct_answers, "из", len(questions), "вопросов.")
        if correct_answers > 1:
            print("Неплохо читаете")
        else:
            print("Читайте внимательнее!!!")
            loaded_text = load_text()
            print(loaded_text)
            conduct_test(loaded_text)
if nt == 5:
    def load_text():
        with open(file_path_5, 'r') as file:
            text = file.read()
        return text
    def conduct_test(text):
        questions = {
            "Кто играл на щепке?\n1.лиса.\n2.медведь.\n3.заяц.\n" : "2",
            "Какой красивый звук услышал охотник в лесу?\n1.ку-ку-ку.\n2.дзенн-дзенн-дзенн.\n3.дрынь-дрынь-дрынь.\n" : "2",
            "На каком музыкальном инструменте играл медвежатник?\n1.на гармошке.\n2.на скрипке.\n3.на балалайке.\n" : "2"
        }
        correct_answers = 0
        for question, correct_answer in questions.items():
            user_answer = input(question + ": ")
            if user_answer == correct_answer:
                print("Правильно!")
                correct_answers += 1
            else:
                print("Неправильно!")
        print("Вы ответили правильно на", correct_answers, "из", len(questions), "вопросов.")
        if correct_answers > 1:
            print("Неплохо читаете")
        else:
            print("Читайте внимательнее!!!")
    loaded_text = load_text()
    print(loaded_text)
    conduct_test(loaded_text)