from lxml import html
import requests

class AppCrawler:
    def __init__(self,starting_url,depth):
        self.starting_url = starting_url
        self.depth = depth
        self.current_depth = 0
        self.depth_links = []
        self.apps = []
    
    def crawl(self):
        app = self.get_website_from_link(self.starting_url)
        self.apps.append(app)
        self.depth_links.append(app.links)

        # while self.current_depth < self.depth:
        #     current_links = []
        #     for link in self.depth_links[self.current_depth]:
        #         current_app = self.get_website_from_link(link)
        #         current_links.extend(current_app.links)
        #         self.apps.append(current_app)
        #     self.current_depth += 1
        #     self.depth_links.append(current_links)
    
    def get_website_from_link(self,link):
        start_page = requests.get(link)
        tree = html.fromstring(start_page.text)

        name = tree.xpath('//span[@itemprop="name"]/text()')[0]
        teacher = tree.xpath('//div[@itemprop="author"]/a/span[@itemprop="name"]/text()')[0]
        price = tree.xpath('//div[@class="block-price"]/span[@class="big-price"]/text()')[0]
        # links = tree.xpath('//div[@class="u-combo-course"]//*/div[@class="des-combo"]/a/@href')

        # app = App(name,teacher,price,links)
        # return app
        # for link in tree.xpath('//div[@class="u-combo-course"]//*/div[@class="des-combo"]/a/@href'):
        #     a = "https://unica.vn"
        #     print(a+link)
        # links = [lambda x=link: x for x in tree.xpath('//div[@class="u-combo-course"]//*/div[@class="des-combo"]/a/@href') return ("https://unica.vn"+x)]
        links = []
class App:
    def __init__(self,name,teacher,price,links):
        self.name = name
        self.teacher = teacher
        self.price = price
        self.links = links
    def __str__(self):
        return ("Name: " + self.name.encode('UTF-8') +
        "\r\nTeacher: " + self.teacher.encode('UTF-8') +
        "\r\nPrice: " + self.price.encode('UTF-8') + "\r\n")

crawler = AppCrawler('https://unica.vn/lam-chu-python-trong-4-tuan',1)
crawler.crawl()

for app in crawler.apps:
    print(app)