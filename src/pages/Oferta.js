import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'

const Oferta = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { lang } = useContext(Context)
    console.log(lang.lang)
    return (
        <div class="d-flex justify-content-between flex-column min-full-height py-4">
            <div class="page">
                <div class="container">
                    {
                        lang.lang == "ru"
                            ?
                            <div class="mt-4">
                                <p><strong>ДОГОВОР ОФЕРТЫ</strong></p>
                                <p><strong>1. Общие положения</strong></p>
                                <p>1.1. Индивидуальный Предприниматель Овчинникова Юлия Игоревна, ИНН 344103083881, ОГРНИП 321344300027087, публикует публичную оферту о продаже товаров, представленным в официальном интернет-магазине Продавца www.thebestforyourself.ru.</p>
                                <p>1.2. В соответствии со статьей 437 ГК РФ, данный документ является публичной офертой, и в случае принятия изложенных ниже условий физическое лицо, производящее акцепт этой оферты, осуществляет оплату Товара Продавца в соответствии с условиями настоящего Договора. В соответствии с пунктом 3 статьи 438 ГК РФ, оплата Товара Покупателем является акцептом оферты, что считается равносильным заключению Договора на условиях, изложенных в оферте.</p>
                                <p>1.3. На основании вышеизложенного, внимательно ознакомьтесь с текстом публичной оферты и, если Вы не согласны с каким-либо пунктом оферты, Вам предлагается отказаться от покупки Товаров, предоставляемых Продавцом.</p>
                                <p>1.4. В настоящей оферте, если контекст не требует иного, нижеприведенные термины имеют следующие значения:</p>
                                <p>• "Оферта" - публичное предложение Продавца, адресованное любому физическому лицу (гражданину), заключить с ним договор купли-продажи (далее - "Договор") на существующих условиях, содержащихся в Договоре, включая все его приложения.</p>
                                <p>• "Продавец” - ИП Овчинникова Юлия Игоревна реализующий Товар, представленный в интернет-магазине Продавца.</p>
                                <p>• "Покупатель" - гражданин, имеющий намерение заказать или приобрести либо заказывающий, приобретающий или использующий товары исключительно для личных, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности заключившее с Продавцом Договор на условиях, содержащихся в настоящей оферте.</p>
                                <p>• "Акцепт" - полное и безоговорочное принятие Покупателем условий оферты.</p>
                                <p>• "Товар" - перечень наименований ассортимента, представленный в официальном интернет-магазине Продавца.</p>
                                <p>• "Заказ" - отдельные позиции из ассортиментного перечня Товара, указанные Покупателем при размещении заявки в интернет-магазине Продавца.</p>
                                <p>• "Доставка Товара"- непосредственная передача заказанного Товара Покупателю в месте, указанном Покупателем в качестве адреса доставки.</p>
                                <p>1.5. Настоящий договор оферты составлен в соответствии с "Правилами продажи товаров дистанционным способом", утвержденными постановлением Правительства Российской Федерации от 27 сентября 2007 года № 612 и Законом "О защите прав потребителей" от 7 февраля 1992 года №2300-I.</p>
                                <p><strong>2. Предмет договора</strong></p>
                                <p>2.1. Продавец продает Товар в соответствии с действующим ценами, опубликованными в интернет-магазине Продавца, а Покупатель производит оплату и принимает Товар в соответствии с условиями настоящего Договора.</p>
                                <p><strong>3. Размещение Заказа</strong></p>
                                <p>3.1. Заказ Товара осуществляется Покупателем путем выбора интересующих позиций через интернет-магазин.</p>
                                <p>3.2. При регистрации (размещении) Заказа в интернет-магазине Продавца Покупатель обязуется предоставить следующую регистрационную информацию о себе:</p>
                                <p>- фамилия, имя, отчество (на русском языке);</p>
                                <p>- фактический адрес доставки;</p>
                                <p>- почтовый адрес (включая индекс);</p>
                                <p>- адрес электронной почты;</p>
                                <p>- контактные телефоны;</p>
                                <p>- иную информацию согласно бланку Заказа размещенного в интернет-магазине Продавца.</p>
                                <p>Принятие Покупателем условий настоящего Договора осуществляется посредством внесения Покупателем соответствующих данных в регистрационную форму в интернет-магазине. Покупатель имеет право редактировать информацию о себе.</p>
                                <p>Продавец не изменяет и не редактирует информацию о Покупателе без согласия последнего.</p>
                                <p>Продавец обязуется не сообщать данные Покупателя в интернет-магазине www.thebestforyourself.ru, а также иную информацию, касающуюся личных данных Покупателя, лицам, не имеющим отношения к исполнению Заказа.</p>
                                <p>Продавец оставляет за собой право отказать в обслуживании Покупателю без объяснения причин.</p>
                                <p>После размещении Заказа данные о Покупателе регистрируются в базе данных Продавца.</p>
                                <p>Утвердив Заказ выбранного Товара, Покупатель предоставляет Продавцу необходимую информацию в соответствии с порядком, указанном в п. 3.2. настоящего Договора.</p>
                                <p>При сборе и обработке персональных данных Покупателей Продавец руководствуется положениями Федерального Закона № 152 ФЗ "О персональных данных" от 27 июля 2006 года, а также порядком сбора, обработки и хранении персональных данных, установленным настоящей офертой.</p>
                                <p>После завершения процесса заполнения формы, выборе способа доставки и оплаты в интернет-магазине, Покупателю направляется письмо на электронную почту, в котором указан присвоенный номер заказа, перечень приобретённых продуктов, стоимость их, информация об оплате, доставке и приблизительные сроки.<p>При сборе и обработке персональных данных Покупателей Продавец руководствуется положениями Федерального Закона № 152 ФЗ "О персональных данных" от 27 июля 2006 года, а также порядком сбора, обработки и хранении персональных данных, установленным настоящей офертой.</p><p>При сборе и обработке персональных данных Покупателей Продавец руководствуется положениями Федерального Закона № 152 ФЗ "О персональных данных" от 27 июля 2006 года, а также порядком сбора, обработки и хранении персональных данных, установленным настоящей офертой.</p></p>
                                <p>3.3. Покупатель несёт ответственность за содержание и достоверность информации, предоставленной при размещении Заказа.</p>
                                <p>3.4. Все информационные материалы, представленные в интернет-магазине www.thebestforyourself.ru, носят справочный характер и не могут в полной мере передавать достоверную информацию об определенных свойствах и характеристиках Товара, таких как: цвет, форма, размер и упаковка. В случае возникновения у Покупателя вопросов, касающихся свойств и характеристик Товара, перед размещением Заказа ему необходимо обратиться за консультацией к Продавцу или послать запрос в директ аккаунта инстаграм @le__mousse.</p>
                                <p>3.5. Данные, которые предоставляет Покупатель, заполняя регистрационные данные, будут использованы Продавцом или привлеченным им лицом при формировании базы данных о покупателях и для информирования Покупателя об акциях и специальных предложениях. Для указанных целей данные могут быть подвергнуты обработке Продавцом или привлеченным им лицом в целях автоматизации с использованием вычислительной техники. Заполнение Покупателем Заказа в интернет-магазине Продавца означает согласие на использование, хранение и обработку персональных данных и данных содержащихся в анкете, любыми не запрещенными законом способами, вплоть до момента отзыва согласия на обработку персональных данных. В любой момент Покупатель может отозвать свое согласие письменным заявлением в свободной форме полученным Продавцом на электронную. почту prof-cosmetics@list.ru.</p>
                                <p><strong>4. Сроки исполнения Заказа</strong></p>
                                <p>4.1. Срок, в который Продавец обязуется исполнить Заказ, составляет от 1 до 60 рабочих дней.</p>
                                <p>Срок исполнения Заказа зависит от наличия заказанных позиций.</p>
                                <p>Товара на складе Продавца и времени, необходимого на обработку Заказа.</p>
                                <p>Заказы, поступившие из интернет-магазина www.thebestforyourself.ru обрабатываются ежедневно (в течении 7 дней) кроме субботы, воскресения и официально праздничных дней на Территории РФ.</p>
                                <p>Срок исполнения Заказа в исключительных случаях может быть оговорен с Покупателем индивидуально в зависимости от характеристик и количества заказанного Товара.</p>
                                <p>В случае отсутствия части Заказа на складе Продавца, в том числе по причинам, не зависящим от последнего, Продавец вправе аннулировать указанный Товар из Заказа Покупателя. Продавец обязуется уведомить Покупателя об изменении комплектности его Заказа путем направления сообщения на электронный адрес, указанный при регистрации в интернет-магазине, по указанному при заказе номеру телефона или дополнительным письменным пояснением к описанию при непосредственном получении Заказа Покупателем.</p>
                                <p>4.2. Заказ, доставляемый Курьерской службой, считается исполненным в момент его передачи Покупателю. Заказ, доставляемый Транспортными компаниями, считается исполненным после оформления товарной накладной Продавцом и передачи Транспортной компании. За сроки доставки Транспортной компанией Продавец ответственности не несет. Подтверждением исполнения Заказа является квитанция или транспортная накладная (документ ее заменяющий) Транспортной компании.</p>
                                <p>4.3. В случае предоставления Покупателем недостоверной информации о его контактных данных или составе Заказа Продавец за ненадлежащее исполнение Заказа ответственности не несет.</p>
                                <p><strong>5. Доставка Заказа</strong></p>
                                <p>5.1. Доставка Заказа Курьерской службой осуществляется в сроки, определенные Покупателем и согласованные с Продавцом и курьерской службой, с учетом условий настоящей оферты.</p>
                                <p>5.2. Доставка Заказа осуществляется по адресу, указанному Покупателем при оформлении заказа через Интернет-сайт.</p>
                                <p>5.3. Стоимость и условия доставки Заказа Покупатель уточняет в директ аккаунта инстаграм @le__mousse.</p>
                                <p>5.4 Покупатель, при получении извещения от почты, курьерской службы и прочих служб о том, что товар находится в пункте выдачи, обязан получить товар в течении <strong>1-2 дней</strong>. В противном случае, при долгом хранении товара в пунктах выдачи, он может испортиться при неподходящих климатических условиях.</p>
                                <p>5.5. Покупатель обязан вскрыть Товар в присутствии курьера, убедиться в комплектности Заказа. После приемки Товара у курьера претензии по комплектности не принимаются.</p>
                                <p><strong>6. Оплата Заказа</strong></p>
                                <p>6.1. При оплате заказа банковской картой, обработка платежа (включая ввод номера карты) происходит на защищенной странице процессинговой системы, которая прошла международную сертификацию. Это значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в интернет-магазин, их обработка полностью защищена и никто, в том числе наш интернет-магазин, не может получить персональные и банковские данные клиента. При работе с карточными данными применяется стандарт защиты информации, разработанный международными платёжными системами Visa и MasterCard - Payment Card Industry Data Security Standard (PCI DSS), что обеспечивает безопасную обработку реквизитов Банковской карты Держателя. Применяемая технология передачи данных гарантирует безопасность по сделкам с Банковскими картами путем использования протоколов Secure Sockets Layer (SSL), Verified by Visa, Secure Code, и закрытых банковских сетей, имеющих высшую степень защиты. В случае возврата, денежные средства возвращаются на ту же карту, с которой производилась оплата.</p>
                                <p>6.2. Цена на Товар отображена в рублях в интернет-магазине www.thebestforyourself.ru.</p>
                                <p>6.3. Цены на Товары, указанные в интернет-магазине, могут быть изменены Продавцом в одностороннем порядке без уведомления Покупателя. В случае изменения цены на заказанные позиции Товара, Продавец обязуется в кратчайшие сроки проинформировать Покупателя о таком изменении. Покупатель вправе подтвердить либо аннулировать Заказ.<span class="Apple-converted-space">&nbsp;</span></p>
                                <p>6.4. Оплата Покупателем самостоятельно размещенного Заказа в интернет-магазине Продавца означает согласие Покупателя с условиями настоящего Договора. День оплаты Заказа является датой заключения Договора оферты между Продавцом и Покупателем.</p>
                                <p><strong>7. Возврат Товара</strong></p>
                                <p>7.1. Покупатель, намеренно или по личным обстоятельствам не получивший доставленный товар на почте, курьерской службой и пр., в случае возврата товара продавцу, оплачивает расходы, понесенные продавцом (доставка, переупаковка и пр.) при повторном направлении заказа. Если покупатель не оплачивает расходы для повторной отправки товара, заказ хранится у продавца до даты истечения срока годности товара, с последующей утилизацией. Денежные средства, оплаченные покупателем возврату, не подлежат.</p>
                                <p>7.2. Возврат товара надлежащего качества:</p>
                                <p>7.2.1. Если по каким-либо причинам Вы решили отказаться от приобретенного товара, то можете сделать это в соответствии с Законом РФ от 07.02.1992 N 2300-1 «О защите прав потребителей. А именно в течении 7 дней после получения товара, необходимо вернуть товар и направить заявление о возврате, с указанием реквизитов для перевода средств, по следующему адресу: 400074, г.Волгоград, ул. Рабоче-Крестьянская, д. 65а.</p>
                                <p>7.2.2. Режим работы организации: понедельник – пятница, с 9:00 до 18:00, суббота, воскресенье – выходной.</p>
                                <p>7.2.3. Возврат Товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства (товар не должен иметь следов вскрытия, использования, сохранена упаковка), а также документ, подтверждающий факт и условия покупки указанного Товара.</p>
                                <p>7.2.4. В течении 10 дней с момента получения продавцом возвращенного товара и предъявленного соответствующего требования, продавец возвращает стоимость товара за вычетом расходов на доставку, на реквизиты, указанные в заявлении.</p>
                                <p>7.3. Внесение изменений в заказ (состав, количество), после произведённой оплаты, не допускается. Пока заказ не направлен, возможно лишь оформить возврат заказа полностью, направив на адрес электронной почты: prof-cosmetics@list.ru заявление о возврате, с указанием реквизитов для перевода средств.</p>
                                <p>7.4. Возврат товара ненадлежащего качества:</p>
                                <p>7.4.1. Покупатель, которому продан товар ненадлежащего качества, если это не было оговорено продавцом, вправе по своему выбору заявить любое из нижеперечисленных требований:</p>
                                <p>-замены на товар аналогичной марки (модели, артикула) или на такой же товар другой марки (модели, артикула) с соответствующим перерасчетом покупной цены;</p>
                                <p>-соразмерного уменьшения покупной цены;</p>
                                <p>-вправе отказаться от исполнения договора и потребовать возврата уплаченной за товар суммы.</p>
                                <p>7.4.2. Интернет-магазин вправе отказать в обмене или возврате товара, если сочтет, что обнаруженный существенный недостаток является следствием неправильной эксплуатации товара.</p>
                                <p>7.4.3. В соответствии со ст. 22 Закона РФ № 2300-I "О Защите прав потребителей", уплаченная Покупателем сумма за Товар ненадлежащего качества подлежит возврату Покупателю в течение 10 календарных дней с момента получения продавцом направленного покупателем товара и соответствующего письменного требования.</p>
                                <p>Адрес для направления заявления и товара: 400074, г.Волгоград, ул. Рабоче-Крестьянская, д. 65а.</p><p>7.4.4. В случае возникновения разногласий по качеству или причинам возникновения недостатков, Продавец имеет право провести проверку качества Товара. Сроки проведения проверки качества устанавливаются действующим законодательством Российской Федерации.<span class="Apple-converted-space">&nbsp;</span></p>
                                <p>По результатам проверки качества или проведения экспертизы, в случае если будет доказано, что за данный недостаток отвечает Продавец, требование Покупателя подлежит удовлетворению.</p>
                                <p>Если по результатам проверки или проведения экспертизы будет установлено, что недостаток не обнаружен или Продавец не несет за него ответственности, Покупатель обязан компенсировать Продавцу затраты на проведение экспертизы и все понесённые транспортные расходы на доставку Товара.</p>
                                <p>7.4.5. Возврат денежных средств, уплаченных за Товар ненадлежащего качества, а также обмен Товара или возврат денежных средств, оплаченных путем безналичного перевода на расчетный счет Продавца осуществляется любым способом по договоренности между Продавцом и Покупателем.</p>
                                <p>7.5. Вся текстовая информация и графические изображения, размещенные в интернет-магазине www.thebestforyourself.ru и в аккаунте инстаграм @le__mousse, являются собственностью Продавца и/или его поставщиков и производителей.</p>
                                <p><strong>8. Права, обязанности и ответственность</strong></p>
                                <p>8.1. Продавец не несет ответственности за ненадлежащее использование товаров Покупателем, заказанных в интернет-магазине www.thebestforyourself.ru.</p>
                                <p>8.2. Продавец вправе передавать свои права и обязанности по исполнению Заказов третьим лицам.</p>
                                <p>8.3. Продавец имеет право на осуществление скрин-фото переписки и записи телефонных разговоров с Покупателем. В соответствии с п.4 ст.16 Федерального закона "Об информации, информационных технологиях и о защите информации" Продавец обязуется: предотвращать попытки несанкционированного доступа к информации и/или передачу ее лицам, не имеющим непосредственного отношения к исполнению Заказов; своевременно обнаруживать и пресекать такие факты. Телефонные разговоры записываются в целях осуществления контроля деятельности Продавца и контроля качества исполнения Заказов.</p>
                                <p>8.4. В соответствии со ст.436 Гражданского кодекса Российской Федерации настоящая оферта не является безотзывной. Продавец имеет право отказать в размещении Заказа лицам, выражающим несогласие с условиями настоящего Договора.</p>
                                <p>8.5. Право собственности на Товар, а также риск его случайной гибели или повреждения переходят к Покупателю с момента получения Товара либо передачи Товара курьерской службе, при привлечении таковой.</p>

                                <p>ИП Овчинникова Юлия Игоревна</p>
                                <p>ОГРНИП №321344300027087</p>
                                <p>ИНН 344103083881</p>
                                <p>Юридический адрес: 143902, Московская область, г. Балашиха, ул. Зеленая, д. 33, кв. 151.</p>
                                <p>Почтовый адрес: 400010, г. Волгоград, проспект им. Г.К. Жукова, 100 б</p>
                            </div>
                            :
                            <div class="mt-4">
                                <p><strong> CONTRACT OFFER</strong></p>
                                <p><strong> 1. General Provisions</strong></p>
                                <p>
                                    1.1. Sole Proprietor Yulia Igorevna Ovchinnikova, TIN 344103083881, OGRNIP 321344300027087, publishes a public offer for the sale of goods presented in the official online store of the Seller www.lemousse.beauty.
                                </p>
                                <p>
                                    1.2.  In accordance with Article 437 of the Civil Code of the Russian Federation, this document is a public offer, and if the conditions set out below are accepted, the individual accepting this offer pays for the Seller's Goods in accordance with the terms of this Agreement.  In accordance with paragraph 3 of Article 438 of the Civil Code of the Russian Federation, payment for the Goods by the Buyer is an acceptance of the offer, which is considered equivalent to the conclusion of the Agreement on the conditions set forth in the offer.
                                </p>
                                <p>
                                    1.3.  Based on the foregoing, carefully read the text of the public offer and, if you do not agree with any clause of the offer, you are invited to refuse to purchase the Goods provided by the Seller.
                                </p>
                                <p>
                                    1.4.  In this offer, unless the context otherwise requires, the following terms have the following meanings:
                                </p>
                                <p>
                                    • "Offer" - a public offer of the Seller, addressed to any individual (citizen), to conclude a contract of sale (hereinafter referred to as the "Agreement") with him on the existing terms contained in the Agreement, including all its annexes.
                                </p>
                                <p>
                                    • "Seller" - SP Ovchinnikova Julia Igorevna selling the Goods presented in the Seller's online store.
                                </p>
                                <p>
                                    • "Buyer" - a citizen who intends to order or purchase or ordering, acquiring or using goods solely for personal, family, household and other needs not related to business activities, who has concluded an Agreement with the Seller on the terms contained in this offer.
                                </p>
                                <p>
                                    • "Acceptance" - full and unconditional acceptance by the Buyer of the terms of the offer.
                                </p>
                                <p>
                                    • "Goods" - a list of assortment items presented in the Seller's official online store.
                                </p>
                                <p>
                                    • "Order" - individual items from the assortment list of the Goods specified by the Buyer when placing an order in the Seller's online store.
                                </p>
                                <p>
                                    • "Delivery of the Goods" - the direct transfer of the ordered Goods to the Buyer at the place indicated by the Buyer as the delivery address.
                                </p>
                                <p>
                                    1.5.  This offer agreement is drawn up in accordance with the "Rules for the sale of goods by remote means", approved by the Decree of the Government of the Russian Federation of September 27, 2007 No. 612 and the Law "On Protection of Consumer Rights" of February 7, 1992 No. 2300-I.
                                </p>
                                <p>
                                    <strong>
                                        2. Subject of the contract
                                    </strong>
                                </p>
                                <p>
                                    2.1.  The Seller sells the Goods in accordance with the current prices published in the Seller's online store, and the Buyer makes payment and accepts the Goods in accordance with the terms of this Agreement.
                                </p>
                                <p>
                                    2.2.  This Agreement and its appendices are official documents of the Seller and an integral part of the Offer.  The current version of each of the above documents is posted in the Seller's online store www.lemousse.beauty.
                                </p>
                                <p>
                                    <strong>
                                        3. Placing an Order

                                    </strong>
                                </p>
                                <p>
                                    3.1.  The order of the Goods is carried out by the Buyer by selecting the items of interest through the online store.

                                </p>
                                <p>
                                    3.2.  When registering (placing) an Order in the Seller's online store, the Buyer undertakes to provide the following registration information about himself:
                                </p>
                                <p> - surname, name, patronymic (in Russian);

                                </p>
                                <p>
                                    - actual delivery address;
                                </p>
                                <p>
                                    - postal address (including zip code);
                                </p>
                                <p>
                                    - E-mail address;
                                </p>
                                <p>
                                    - Contact phone numbers;
                                </p>
                                <p>
                                    - other information according to the Order form placed in the Seller's online store.
                                </p>
                                <p>
                                    Acceptance by the Buyer of the terms of this Agreement is carried out by entering the relevant data into the registration form in the online store by the Buyer.  The buyer has the right to edit information about himself.
                                </p>
                                <p>
                                    The Seller does not change or edit information about the Buyer without the consent of the latter.
                                </p>
                                <p>
                                    The Seller undertakes not to disclose the Buyer's data in the online store www.lemousse.beauty, as well as other information relating to the Buyer's personal data, to persons not related to the execution of the Order.
                                </p>
                                <p>
                                    The Seller reserves the right to refuse service to the Buyer without explanation.

                                </p>
                                <p> After the Order is placed, the Buyer's data is registered in the Seller's database.
                                </p>
                                <p>
                                    Having approved the Order of the selected Goods, the Buyer provides the Seller with the necessary information in accordance with the procedure specified in clause 3.2.  actual agreement.
                                </p>
                                <p>
                                    When collecting and processing personal data of Buyers, the Seller is guided by the provisions of Federal Law No. 152 FZ "On Personal Data" dated July 27, 2006, as well as the procedure for collecting, processing and storing personal data established by this offer.
                                </p>
                                <p>
                                    After completing the process of filling out the form, choosing the method of delivery and payment in the online store, the Buyer is sent an email containing the assigned order number, a list of purchased products, their cost, information about payment, delivery and approximate terms.

                                </p>

                                <p>
                                    3.3.  The Buyer is responsible for the content and accuracy of the information provided when placing the Order.
                                </p>
                                <p>
                                    3.4.  All information materials presented in the www.lemousse.beauty online store are for reference only and cannot fully convey reliable information about certain properties and characteristics of the Goods, such as: color, shape, size and packaging.  If the Buyer has any questions regarding the properties and characteristics of the Goods, before placing the Order, he must seek advice from the Seller or send a request to the direct account of the instagram account @le__mousse.
                                </p>
                                <p>

                                    3.5.  The data that the Buyer provides when filling in the registration data will be used by the Seller or a person involved by him in the formation of a database about buyers and to inform the Buyer about promotions and special offers.  For these purposes, the data may be processed by the Seller or a person involved by him for the purpose of automation using computer technology.  Filling in the Order by the Buyer in the Seller's online store means consent to the use, storage and processing of personal data and data contained in the questionnaire, by any means not prohibited by law, up to the moment of withdrawal of consent to the processing of personal data.  At any time, the Buyer may revoke his consent by a written application in free form received by the Seller by e-mail.  mail prof-cosmetics@list.ru.
                                </p>
                                <p>
                                    <strong>
                                        4. Terms of execution of the Order
                                    </strong>
                                </p>
                                <p>
                                    4.1.  The period in which the Seller undertakes to fulfill the Order is from 1 to 60 business days.

                                </p>
                                <p>
                                    The term of execution of the Order depends on the availability of the ordered items.

                                </p>
                                <p>
                                    Goods in the Seller's warehouse and the time required to process the Order.
                                </p>

                                <p>
                                    Orders received from the online store www.lemousse.beauty are processed daily (within 7 days) except Saturday, Sunday and official holidays in the territory of the Russian Federation.
                                </p>
                                <p>
                                    The deadline for the execution of the Order in exceptional cases may be agreed with the Buyer individually, depending on the characteristics and quantity of the ordered Goods.
                                </p>
                                <p>
                                    In the absence of a part of the Order in the warehouse of the Seller, including for reasons beyond the control of the latter, the Seller has the right to cancel the specified Goods from the Buyer's Order.  The Seller undertakes to notify the Buyer of a change in the completeness of his Order by sending a message to the email address specified during registration in the online store, to the phone number specified during the order, or with an additional written explanation to the description upon direct receipt of the Order by the Buyer.</p>
                                <p>
                                    4.2.  The order delivered by the Courier Service is considered to be executed at the moment of its transfer to the Buyer.  The order delivered by the Transport companies is considered to be executed after the Seller issues the consignment note and transfers it to the Transport company.  The Seller is not responsible for the delivery time by the Transport Company.
                                    Confirmation of the execution of the Order is a receipt or waybill (substituting document) of the Transport Company.
                                </p>
                                <p>
                                    4.3.  If the Buyer provides false information about his contact details or the composition of the Order, the Seller shall not be liable for improper execution of the Order.
                                </p>
                                <p>
                                    <strong>
                                        5. Delivery of the Order
                                    </strong>
                                </p>
                                <p>
                                    5.1.  Delivery of the Order by the Courier Service is carried out within the time period determined by the Buyer and agreed with the Seller and the courier service, subject to the terms of this offer.
                                </p>
                                <p>
                                    5.2.  Delivery of the Order is carried out to the address specified by the Buyer when placing an order through the Internet site.
                                </p>
                                <p>
                                    5.3.  The cost and terms of delivery of the Order are specified by the Buyer in the direct account on Instagram @le__mousse.
                                </p>
                                <p>
                                    5.4 The buyer, upon receipt of a notice from the post office, courier service and other services that the goods are at the point of issue, is obliged to receive the goods within
                                    <strong>1-2 days. </strong>
                                    Otherwise, if the goods are stored for a long time at the points of issue, they may deteriorate under unsuitable climatic conditions.
                                </p>
                                <p>
                                    5.5.  The Buyer is obliged to open the Goods in the presence of the courier, to make sure that the Order is complete.  After acceptance of the Goods from the courier, claims for completeness are not accepted.
                                </p>
                                <p>
                                    <strong>
                                        6. Payment for the Order
                                    </strong>
                                </p>
                                <p>

                                    6.1.  When paying for an order with a bank card, the payment processing (including entering the card number) takes place on a secure page of the processing system, which has passed international certification.  This means that your confidential data (card details, registration data, etc.) are not sent to the online store, their processing is completely protected and no one, including our online store, can receive the personal and banking data of the client.  When working with card data, the information security standard developed by the international payment systems Visa and MasterCard - Payment Card Industry Data Security Standard (PCI DSS) is used, which ensures the safe processing of the details of the Holder's Bank Card.  The applied data transfer technology guarantees the security of transactions with Bank cards through the use of Secure Sockets Layer (SSL), Verified by Visa, Secure Code protocols, and closed banking networks with the highest degree of protection.  In case of a refund, the funds are returned to the same card with which the payment was made.
                                </p>
                                <p>
                                    6.2.  The price of the Goods is displayed in rubles in the online store www.lemousse.beauty.

                                </p>
                                <p>
                                    6.3.  The prices for the Goods indicated in the online store may be changed by the Seller unilaterally without notifying the Buyer.  In the event of a change in the price of the ordered items of the Goods, the Seller undertakes to inform the Buyer of such a change as soon as possible.  The Buyer has the right to confirm or cancel the Order.

                                    <span class="Apple-converted-space">&nbsp;</span></p>
                                <p>
                                    6.4.  Payment by the Buyer of a self-placed Order in the Seller's online store means the Buyer's consent to the terms of this Agreement.  The day of payment for the Order is the date of conclusion of the Offer Agreement between the Seller and the Buyer.
                                </p>
                                <p>
                                    <strong>

                                        7. Return of Goods


                                    </strong>
                                </p>
                                <p>

                                    7.1.  The buyer, who intentionally or for personal reasons did not receive the delivered goods by mail, courier service, etc., in case of returning the goods to the seller, pays the costs incurred by the seller (delivery, repacking, etc.) when re-sending the order.  If the buyer does not pay the costs for re-sending the goods, the order is stored by the seller until the expiration date of the goods, with subsequent disposal.  The money paid by the buyer is non-refundable.
                                </p>
                                <p>
                                    7.2.  Return of good quality goods:

                                </p>
                                <p>
                                    7.2.1.  If for some reason you decide to refuse the purchased goods, you can do this in accordance with the Law of the Russian Federation of 07.02.1992 N 2300-1 “On Protection of Consumer Rights.  Namely, within 7 days after receiving the goods, it is necessary to return the goods and send a return application, indicating the details for transferring funds, to the following address: 400074, Volgograd, st.  Worker-Krestyanskaya, d. 65a.
                                </p>
                                <p>

                                    7.2.2.  Working hours of the organization: Monday - Friday, from 9:00 to 18:00, Saturday, Sunday - day off.

                                </p>
                                <p>
                                    7.2.3.
                                    Return of the Goods of good quality is possible if its presentation, consumer properties are preserved (the goods must not have traces of opening, use, the packaging is preserved), as well as a document confirming the fact and conditions of purchase of the specified Goods.

                                </p>
                                <p>
                                    7.2.4.  Within 10 days from the date of receipt by the seller of the returned goods and the corresponding request, the seller returns the cost of the goods, minus the cost of delivery, to the details specified in the application.

                                </p>
                                <p>
                                    7.3.  Making changes to the order (composition, quantity), after the payment has been made, is not allowed.  While the order has not been sent, it is only possible to return the order in full by sending a return request to the e-mail address: prof-cosmetics@list.ru, indicating the details for transferring funds.
                                </p>
                                <p>
                                    7.4.  Return of goods of inadequate quality:

                                </p>
                                <p>
                                    7.4.1.  The buyer, to whom the goods of inadequate quality were sold, if this was not agreed by the seller, has the right to declare any of the following requirements at his choice:

                                </p>
                                <p>
                                    - replacement for a product of a similar brand (model, article) or for the same product of another brand (model, article) with a corresponding recalculation of the purchase price;
                                </p>
                                <p>
                                    - proportional reduction of the purchase price;

                                </p>
                                <p>
                                    - the right to refuse to fulfill the contract and demand the return of the amount paid for the goods.
                                </p>
                                <p>
                                    7.4.2.  The online store has the right to refuse to exchange or return the goods if it considers that the detected significant defect is the result of improper use of the goods.

                                </p>
                                <p>
                                    7.4.3.  In accordance with Art.  22 of the Law of the Russian Federation No. 2300-I "On Protection of Consumer Rights", the amount paid by the Buyer for the Goods of inadequate quality is subject to return to the Buyer within 10 calendar days from the date of receipt by the seller of the goods sent by the buyer and the corresponding written request.
                                    Address for sending the application and goods: 400074, Volgograd, st.  Worker-Krestyanskaya, d. 65a.
                                </p>
                                <p>
                                    7.4.4.  In case of disagreement on the quality or reasons for the occurrence of defects, the Seller has the right to check the quality of the Goods.  The terms of the quality control are established by the current legislation of the Russian Federation.

                                    <span class="Apple-converted-space">&nbsp;</span></p>
                                <p>
                                    According to the results of the quality check or examination, if it is proved that the Seller is responsible for this defect, the Buyer's claim is subject to satisfaction.


                                </p>
                                <p>
                                    If, based on the results of the inspection or examination, it is established that the defect was not found or the Seller is not responsible for it, the Buyer is obliged to compensate the Seller for the costs of the examination and all transport costs incurred for the delivery of the Goods.
                                </p>
                                <p>
                                    7.4.5.  The return of funds paid for the Goods of inadequate quality, as well as the exchange of the Goods or the return of funds paid by bank transfer to the Seller's account is carried out in any way as agreed between the Seller and the Buyer.
                                </p>
                                <p>
                                    7.5.  All textual information and graphic images posted in the online store www.lemousse.beauty and in the Instagram account @le__mousse are the property of the Seller and/or its suppliers and manufacturers.
                                </p>
                                <p>
                                    <strong>
                                        8. Rights, duties and responsibilities
                                    </strong>
                                </p>
                                <p>
                                    8.1.  The Seller is not responsible for the improper use of goods by the Buyer ordered in the online store www.lemousse.beauty.
                                </p>
                                <p>
                                    8.2.  The Seller has the right to transfer its rights and obligations for the execution of Orders to third parties.
                                </p>
                                <p>
                                    8.3.  The Seller has the right to take screenshots of correspondence and record telephone conversations with the Buyer.  In accordance with paragraph 4 of Article 16 of the Federal Law "On Information, Information Technologies and Information Protection", the Seller undertakes: to prevent attempts of unauthorized access to information and / or transfer of it to persons not directly related to the execution of Orders;  timely detection and suppression of such facts.
                                </p>
                                <p>
                                    8.4.  In accordance with Article 436 of the Civil Code of the Russian Federation, this offer is not irrevocable.  The Seller has the right to refuse to place an Order to persons expressing disagreement with the terms of this Agreement.
                                </p>
                                <p>
                                    8.5.  Ownership of the Goods, as well as the risk of its accidental loss or damage, passes to the Buyer from the moment the Goods are received or the Goods are transferred to the courier service, if one is involved.
                                </p>
                                <p>
                                    9. Details of a legal entity:
                                </p>

                                <p> SP Ovchinnikova Julia Igorevna
                                </p>
                                <p>
                                    OGRNIP No. 321344300027087

                                </p>
                                <p> TIN 344103083881
                                </p>
                                <p>Legal address: 143902, Moscow region, Balashikha, st.  Zelenaya, 33, apt.  151.
                                </p>
                                <p>Postal address: 400010, Volgograd, avenue im.  G.K.  Zhukova, 100 b
                                </p>
                            </div>
                    }
                    {/* <h1>Публичная оферта</h1> */}



                </div>
            </div >
        </div >
    )
}

export default observer(Oferta) 