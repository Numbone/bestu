import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '..'

const Politika = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { lang } = useContext(Context)
    return (
        <div className="d-flex justify-content-between flex-column min-full-height py-4">
            <div class="page">
                <div class="container">
                    {
                        lang.lang === "ru"
                            ? <h1>Политика конфиденциальности</h1>
                            : <h1>Privacy Policy </h1>
                    }

                    <div className="mt-4">
                        {
                            lang.lang === "ru"
                                ?
                                <div className="mt-4">
                                    <p>
                                        <strong>
                                            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                                        </strong>
                                    </p>
                                    <p>
                                        Настоящим Соглашением, любое физическое лицо, именуемое «Покупатель», дает свое согласие на обработку, хранение и использование персональных данных Индивидуальным предпринимателем Овчинникова Юлия Игоревна (ОГРНИП 321344300027087, ИНН 344103083881), юридический адрес: 143902, Московская обл., г. Балашиха, ул. Зеленая, д. 33, кв. 151, именуемое в дальнейшем «Оператор», на&nbsp;основании Федеральном законе № 152-ФЗ от 27.07.2006 «О персональных данных» и на условиях изложенных в настоящем Соглашении.
                                        <br />
                                        Покупатель обязан полностью ознакомиться с настоящим Соглашением до момента предоставления персональных данных Оператору. На основании вышеизложенного, внимательно ознакомьтесь с текстом Соглашения, и, если вы не согласны с каким-либо пунктом, Вам предлагается отказаться от приобретения Товаров, предоставляемых Оператором, и принятия условий настоящего Соглашения.
                                    </p>
                                    <p>
                                        <strong>
                                            1. НАЗНАЧЕНИЕ И ОБЛАСТЬ ДЕЙСТВИЯ
                                        </strong>
                                    </p>
                                    <p>
                                        1.1. Настоящее Соглашение определяет цели и общие принципы обработки персональных данных, а также реализуемые меры защиты персональных данных Оператором.
                                    </p>
                                    <p>
                                        1.2. Настоящее Соглашение является общедоступным документом Оператора и предусматривает возможность ознакомления с ней любых лиц.
                                    </p>
                                    <p>
                                        1.3. По настоящему Соглашению срок действия согласия Покупателя ограничен сроком, требующимся для достижения цели обработки персональных данных, если иной срок хранения персональных данных не установлен действующим законодательством Российской Федерации.
                                    </p>
                                    <p>
                                        1.4. В настоящем Соглашении используются термины и определения в соответствии с их значениями, как они определены в Федеральном законе № 152-ФЗ от 27.07.2006 «О персональных данных», в том числе Покупатель подтверждает, что проинформирован о понятии следующих терминов:</p><p>Под персональными данными подразумевается любая информация, относящаяся к прямо или косвенно к Покупателю, включая, но не ограничиваясь: фамилия, имя, отчество, дата рождения, контактный телефон, адрес электронной почты, почтовый адрес, сведения о стране, городе, области проживания, сведения о банковской карте (номер, CVV, фамилия имя на латинице, год и месяц окончания действия карты);</p><p>Под обработкой персональных данных понимаются действия с персональными данными, а именно: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), блокирование, удаление персональных данных, совершаемые использованием средств автоматизации Оператора.
                                    </p>
                                    <p>
                                        1.5. Покупатель проинформирован и подтверждает, что по настоящему Соглашению согласие на обработку, хранение и использование персональных данных распространяется на всех сотрудников Оператора (включая работников по трудовым договорам и сотрудников, работающих по договорам подряда) и все структурные подразделения Оператора, включая обособленные подразделения. Требования настоящего Соглашения также учитываются и предъявляются в отношении иных лиц при необходимости их участия в процессе обработки персональных данных Оператором, а также в случаях передачи им в установленном порядке персональных данных на основании соглашений, договоров, поручений на обработку.
                                    </p>
                                    <p>
                                        1.6. Оператор оставляет за&nbsp;собой право вносить изменения в&nbsp;одностороннем порядке в&nbsp;настоящее Соглашение, при условии, что изменения не&nbsp;противоречат действующему законодательству РФ. Изменения условий настоящего Соглашения вступают в&nbsp;силу после их&nbsp;публикации на&nbsp;Сайте – https://thebestforyourself.ru.
                                    </p>
                                    <p>
                                        <strong>
                                            2. ПРИНЦИПЫ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                                        </strong>
                                    </p>
                                    <p>
                                        2.1. Обработка персональных данных Оператором осуществляется на законной и справедливой основе.
                                    </p>
                                    <p>
                                        2.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей.
                                        <span className="Apple-converted-space">
                                            &nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        2.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.
                                    </p>
                                    <p>
                                        2.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.
                                    </p>
                                    <p>
                                        2.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Обрабатываемые персональные данные не являются избыточными по отношению к заявленным целям их обработки.
                                    </p>
                                    <p>
                                        2.6. При обработке персональных данных обеспечены точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры по удалению или уточнению неполных, или неточных данных.
                                    </p>
                                    <p>
                                        2.7. Срок хранения персональных данных три года если не установлен договором, стороной которого, выгодоприобретателем или поручителем, по которому является субъект персональных данных. Обрабатываемые персональные данные подлежат уничтожению либо обезличиванию по достижении целей обработки или в случае утраты необходимости их хранения.
                                    </p>
                                    <p>
                                        <strong>
                                            3. УСЛОВИЯ И ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                                        </strong>
                                    </p>
                                    <p>
                                        3.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.
                                    </p>
                                    <p>
                                        3.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.
                                    </p>
                                    <p>
                                        3.3. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем, по которому является субъект персональных данных, в том числе в случае реализации оператором своего права на уступку прав (требований) по такому договору, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.
                                    </p>
                                    <p>
                                        3.4. Покупатель подтверждаете, что проинформирован о том, что обработка предоставляемых им персональных данных может осуществляется для достижения следующей цели: исполнения обязательств Оператора по заказам, договорам и иным обязательствам, принятым Оператором в качестве обязательных к исполнению перед Покупателем, в том числе проведения аудита и
                                        &nbsp;
                                        прочих внутренних исследований с
                                        &nbsp
                                        ;целью повышения качества предоставляемых услуг.
                                    </p>
                                    <p>
                                        3.5. Для указанных целей в п. 3.4. настоящего Соглашения Оператор реализует комплекс действий, направленных на выполнение следующих задач:
                                    </p>
                                    <p>
                                        <strong>
                                            -
                                        </strong>идентификация стороны для осуществления продажи Товара;
                                    </p>
                                    <p>
                                        -предоставление пользователю персонализированных услуг продаже Товара;
                                    </p>
                                    <p>
                                        -улучшение качества обслуживания при продаже Товара;
                                    </p>
                                    <p>
                                        -проведение статистических и иных исследований, на основе обезличенных данных;

                                    </p>
                                    <p>
                                        -предоставление Покупателям Сайта безопасного и удобного функционала по его использованию, эффективному отображению информации;
                                    </p>
                                    <p>
                                        -эффективное исполнение заказов, договоров и иных обязательств, принятых Оператором в качестве обязательных к исполнению перед Покупателем;
                                    </p>
                                    <p>
                                        -обработка вопросов Покупателей Сайта;</p><p>-осуществление и/или исполнение функций, полномочий и обязанностей, возложенных законодательством Российской Федерации на Оператора.
                                    </p>
                                    <p>
                                        <strong>
                                            4. ПРАВА ПОКУПАТЕЛЕЙ (СУБЪЕКТОВ ПЕРСОНАЛЬНЫХ ДАННЫХ)
                                        </strong>
                                    </p>
                                    <p>
                                        4.1. При этом Покупатель вправе в любой момент отозвать настоящее согласие, путём направления письменного уведомления Оператору на почтовый адрес: 400074, г. Волгоград, ул. Рабоче-Крестьянская, 65, об отзыве согласия на обработку персональных данных либо лично. Удаление персональных данных Покупателя будет произведено Оператором в течении 30 (тридцати) календарных дней с момента получения такого уведомления.
                                    </p>
                                    <p>
                                        4.2. Покупатель имеет право на получение информации, касающейся обработки его персональных данных, в том числе содержащей:
                                    </p>
                                    <p>
                                        - подтверждение факта обработки персональных данных Оператором;
                                        <span className="Apple-converted-space">&nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        - правовые основания и цели обработки персональных данных; - цели и применяемые Оператором способы обработки персональных данных;
                                    </p>
                                    <p>
                                        - наименование и место нахождения Оператора, сведения о лицах (за исключением сотрудников/работников Оператора), которые имеют доступ к персональным данным или которым могут быть раскрыты персональные данные на основании договора с Оператором или на основании федерального закона;
                                    </p>
                                    <p>
                                        - обрабатываемые персональные данные, относящиеся к соответствующему субъекту персональных данных, источник их получения, если иной порядок представления таких данных не предусмотрен федеральным законом;
                                    </p>
                                    <p>
                                        - сроки обработки персональных данных, в том числе сроки их хранения;
                                    </p>
                                    <p>
                                        - порядок осуществления субъектом персональных данных прав, предусмотренных Федеральным законом «О персональных данных»;
                                    </p>
                                    <p>
                                        - информацию об осуществленной или о предполагаемой трансграничной передаче данных;
                                        <span className="Apple-converted-space">
                                            &nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        - наименование или фамилию, имя, отчество и адрес лица, осуществляющего обработку персональных данных по поручению Оператора, если обработка поручена или будет поручена такому лицу;
                                    </p>
                                    <p>
                                        - иные сведения, предусмотренные Федеральным законом «О персональных данных» или другими федеральными законами.
                                    </p>
                                    <p>
                                        4.3. Покупатель вправе требовать от Оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.
                                    </p>
                                    <p>
                                        4.4. Если Покупатель считает, что Оператор осуществляет обработку его персональных данных с нарушением требований Федерального закона «О персональных данных» или иным образом нарушает его права и свободы, субъект персональных данных вправе обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Федеральная служба по надзору в сфере связи, информационных технологий и массовых коммуникаций — Роскомнадзор) или судебном порядке.
                                    </p>
                                    <p>
                                        4.5. Субъект персональных данных имеет право на защиту своих прав и законных интересов, в том числе на возмещение убытков и (или) компенсацию морального вреда в судебном порядке.
                                    </p>
                                    <p>
                                        <strong>
                                            5. МЕРЫ ПО ОБЕСПЕЧЕНИЮ БЕЗОПАСНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                                        </strong>
                                    </p>
                                    <p>
                                        5.1. Оператор при обработке персональных данных принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.
                                    </p>
                                    <p>
                                        5.2. Обеспечение безопасности персональных данных достигается, в частности:
                                    </p>
                                    <p>- определением угроз безопасности персональных данных при их обработке в информационных системах персональных данных;
                                    </p>
                                    <p>- применением организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных, необходимых для выполнения требований к защите персональных данных, исполнение которых обеспечивает установленные Правительством Российской Федерации уровни защищенности персональных данных;
                                    </p>
                                    <p>
                                        - применением прошедших в установленном порядке процедуру оценки соответствия средств защиты информации;
                                    </p>
                                    <p>
                                        - оценкой эффективности принимаемых мер по обеспечению безопасности персональных данных до ввода в эксплуатацию информационной системы персональных данных;
                                    </p>
                                    <p>
                                        - учетом машинных носителей персональных данных;
                                    </p>
                                    <p>
                                        - обнаружением фактов несанкционированного доступа к персональным данным и принятием мер;
                                    </p>
                                    <p>
                                        - восстановлением персональных данных, модифицированных или уничтоженных вследствие несанкционированного доступа к ним;
                                    </p>
                                    <p>
                                        - установлением правил доступа к персональным данным, обрабатываемым в информационной системе персональных данных, а также обеспечением регистрации и учета всех действий, совершаемых с персональными данными в информационной системе персональных данных;
                                    </p>
                                    <p>
                                        - контролем за принимаемыми мерами по обеспечению безопасности персональных данных и уровня защищенности информационных систем персональных данных.
                                    </p>
                                    <p>
                                        5.3. Оператор обязуется не
                                        &nbsp;
                                        передавать полученные персональные данные третьим лицам, за&nbsp;исключением следующих случаев:
                                    </p>
                                    <p>
                                        По&nbsp;запросам уполномоченных органов государственной власти&nbsp;РФ только по&nbsp;основаниям и&nbsp;в&nbsp;порядке, установленным законодательством РФ Стратегическим партнерам, которые работают с Оператором для предоставления продуктов и&nbsp;услуг, или тем из&nbsp;них, которые помогают Оператору реализовывать продукты и&nbsp;услуги потребителям. При этом Оператор предоставляет третьим лицам минимальный объем персональных данных, необходимый только для оказания требуемой услуги или проведения необходимой транзакции.
                                    </p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                                : <div className="mt-4">
                                    <p>
                                        <strong>
                                            Privacy Policy
                                        </strong>
                                    </p>
                                    <p>
                                        By this Agreement, any individual referred to as the "Buyer" gives his consent to the processing, storage and use of personal data by the Sole Proprietor Yulia Igorevna Ovchinnikova (OGRNIP 321344300027087, TIN 344103083881), legal address: 143902, Moscow region, Balashikha, st.  .  Zelenaya, 33, apt.  151, hereinafter referred to as the "Operator", on the basis of Federal Law No. 152-FZ of July 27, 2006 "On Personal Data" and on the terms set forth in this Agreement.
                                        <br />
                                        The Buyer is obliged to fully familiarize himself with this Agreement before providing personal data to the Operator.  Based on the foregoing, carefully read the text of the Agreement, and if you do not agree with any clause, you are invited to refuse to purchase the Goods provided by the Operator and accept the terms of this Agreement.
                                    </p>
                                    <p>
                                        <strong>
                                            1. PURPOSE AND SCOPE
                                        </strong>
                                    </p>
                                    <p>
                                        1.1.  This Agreement defines the purposes and general principles for the processing of personal data, as well as the implemented measures for the protection of personal data by the Operator.
                                    </p>
                                    <p>
                                        1.2.  This Agreement is a public document of the Operator and provides for the possibility of familiarization with it by any person.
                                    </p>
                                    <p>
                                        1.3.  Under this Agreement, the period of validity of the Buyer's consent is limited to the period required to achieve the purpose of processing personal data, unless a different period of storage of personal data is established by the current legislation of the Russian Federation.</p>
                                    <p>
                                        1.4.  This Agreement uses the terms and definitions in accordance with their meanings, as they are defined in Federal Law No. 152-FZ of July 27, 2006 "On Personal Data", including the Buyer confirms that he is informed about the concept of the following terms:

                                        Personal data means any information relating directly or indirectly to the Buyer, including, but not limited to: last name, first name, patronymic, date of birth, contact phone number, e-mail address, postal address, information about the country, city, area of ​​residence, information  about a bank card (number, CVV, last name, first name in Latin, year and month of expiration of the card);

                                        The processing of personal data refers to actions with personal data, namely: collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (provision, access), blocking, deletion of personal data, performed by using means  operator automation.
                                    </p>
                                    <p>
                                        1.5.  The Buyer is informed and confirms that under this Agreement, consent to the processing, storage and use of personal data applies to all employees of the Operator (including employees under employment contracts and employees working under contract agreements) and all structural divisions of the Operator, including separate divisions.  The requirements of this Agreement are also taken into account and presented to other persons if they need to participate in the process of processing personal data by the Operator, as well as in cases where personal data is transferred to them in the prescribed manner on the basis of agreements, contracts, instructions for processing.
                                    </p>
                                    <p>
                                        1.6.  The Operator reserves the right to make changes unilaterally to this Agreement, provided that the changes do not contradict the current legislation of the Russian Federation.  Changes to the terms of this Agreement come into force after they are published on the Site - https://thebestforyourself.ru.

                                    </p>
                                    <p>
                                        <strong>
                                            2. PRINCIPLES OF PERSONAL DATA PROCESSING
                                        </strong>
                                    </p>
                                    <p>
                                        2.1.  The processing of personal data by the Operator is carried out on a legal and fair basis.

                                    </p>
                                    <p>
                                        2.2.  The processing of personal data is limited to the achievement of specific, predetermined and legitimate purposes.

                                        <span className="Apple-converted-space">
                                            &nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        2.3.  It is not allowed to combine databases containing personal data, the processing of which is carried out for purposes that are incompatible with each other.
                                    </p>
                                    <p>
                                        2.4.  Only personal data that meet the purposes of their processing are subject to processing.
                                    </p>
                                    <p>
                                        2.5.The content and scope of the processed personal data correspond to the stated purposes of processing.  The processed personal data are not redundant in relation to the stated purposes of their processing.
                                    </p>
                                    <p>
                                        2.6.  When processing personal data, the accuracy of personal data, their sufficiency, and, if necessary, their relevance in relation to the purposes of processing personal data, are ensured.  The operator takes the necessary measures to remove or clarify incomplete or inaccurate data.
                                    </p>
                                    <p>
                                        2.7.  The period of storage of personal data is three years, unless established by an agreement to which the party, beneficiary or guarantor is the subject of personal data.  The processed personal data is subject to destruction or depersonalization upon achievement of the purposes of processing or in case of loss of the need to store them.

                                    </p>
                                    <p>
                                        <strong>
                                            3. CONDITIONS AND PURPOSE OF PERSONAL DATA PROCESSING
                                        </strong>
                                    </p>
                                    <p>
                                        3.1.  The processing of personal data is carried out with the consent of the subject of personal data to the processing of his personal data.
                                    </p>
                                    <p>
                                        3.2.  The processing of personal data is necessary to achieve the goals stipulated by an international treaty of the Russian Federation or the law, to exercise and fulfill the functions, powers and duties assigned to the operator by the legislation of the Russian Federation.
                                    </p>
                                    <p>
                                        3.3.  The processing of personal data is necessary for the performance of an agreement to which the personal data subject is a party or beneficiary or guarantor, including if the operator exercises his right to assign rights (claims) under such an agreement, as well as to conclude an agreement on the initiative of the personal data subject  data or an agreement under which the subject of personal data will be the beneficiary or guarantor.
                                    </p>
                                    <p>

                                        3.4.  The Buyer confirms that he is informed that the processing of personal data provided by him can be carried out to achieve the following goal: fulfillment of the Operator's obligations under orders, contracts and other obligations accepted by the Operator as binding on the Buyer, including auditing and other internal  research to improve the quality of services provided.

                                    </p>
                                    <p>
                                        For the indicated purposes in clause 3.4.  of this Agreement, the Operator implements a set of actions aimed at performing the following tasks:
                                    </p>
                                    <p>
                                        <strong>
                                            -
                                        </strong>identification of the party for the sale of the Goods;

                                    </p>
                                    <p>
                                        - providing the user with personalized services for the sale of the Goods;

                                    </p>
                                    <p>
                                        -improving the quality of service when selling the Goods;

                                    </p>
                                    <p>
                                        - carrying out statistical and other studies based on anonymized data;


                                    </p>
                                    <p>
                                        - providing the Buyers of the Site with safe and convenient functionality for its use, effective display of information;

                                    </p>
                                    <p>
                                        - effective execution of orders, contracts and other obligations accepted by the Operator as binding on the Buyer;
                                    </p>
                                    <p>
                                        - processing of questions of the Buyers of the Site;
                                    </p>
                                    <p>
                                        - implementation and/or performance of the functions, powers and duties assigned by the legislation of the Russian Federation to the Operator.


                                    </p>
                                    <p>
                                        <strong>
                                            4. RIGHTS OF BUYERS (PERSONAL DATA SUBJECTS)
                                        </strong>
                                    </p>
                                    <p>
                                        4.1.  In this case, the Buyer has the right to revoke this consent at any time by sending a written notice to the Operator at the postal address: 400074, Volgograd, st.  Worker-Krestyanskaya, 65, to withdraw consent to the processing of personal data or in person.  The Buyer's personal data will be deleted by the Operator within 30 (thirty) calendar days from the date of receipt of such notification.
                                    </p>
                                    <p>
                                        4.2.  The buyer has the right to receive information regarding the processing of his personal data, including information containing:
                                    </p>
                                    <p>
                                        - confirmation of the fact of processing personal data by the Operator;
                                        <span className="Apple-converted-space">&nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        - legal grounds and purposes of personal data processing;  - the purposes and methods of processing personal data used by the Operator;

                                    </p>
                                    <p>
                                        - the name and location of the Operator, information about persons (with the exception of employees / employees of the Operator) who have access to personal data or to whom personal data may be disclosed on the basis of an agreement with the Operator or on the basis of federal law;

                                    </p>
                                    <p>
                                        - processed personal data relating to the relevant subject of personal data, the source of their receipt, unless a different procedure for the submission of such data is provided by federal law;
                                    </p>
                                    <p>
                                        - terms of personal data processing, including the terms of their storage;

                                    </p>
                                    <p>
                                        - the procedure for the exercise by the subject of personal data of the rights provided for by the Federal Law "On Personal Data";
                                    </p>
                                    <p>
                                        - information about the performed or proposed cross-border data transfer;

                                        <span className="Apple-converted-space">
                                            &nbsp;
                                        </span>
                                    </p>
                                    <p>
                                        - the name or surname, name, patronymic and address of the person who processes personal data on behalf of the Operator, if the processing is or will be entrusted to such a person;
                                    </p>
                                    <p>
                                        - other information provided for by the Federal Law "On Personal Data" or other federal laws.
                                    </p>
                                    <p>
                                        4.3.  The Buyer has the right to demand from the Operator the clarification of his personal data, their blocking or destruction if the personal data is incomplete, outdated, inaccurate, illegally obtained or not necessary for the stated purpose of processing, as well as take legal measures to protect their rights.
                                    </p>
                                    <p>
                                        4.4.  If the Buyer believes that the Operator is processing his personal data in violation of the requirements of the Federal Law "On Personal Data" or otherwise violates his rights and freedoms, the subject of personal data has the right to appeal against the actions or inaction of the Operator to the authorized body for the protection of the rights of subjects of personal data (Federal  service for supervision in the field of communications, information technology and mass communications - Roskomnadzor) or in court.
                                    </p>
                                    <p>
                                        4.5.  The subject of personal data has the right to protect his rights and legitimate interests, including compensation for losses and (or) compensation for moral damage in court.
                                    </p>
                                    <p>
                                        <strong>
                                            5. PERSONAL DATA SECURITY MEASURES
                                        </strong>
                                    </p>
                                    <p>

                                        5.1.  When processing personal data, the operator takes the necessary legal, organizational and technical measures to protect personal data from unauthorized or accidental access to them, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other illegal actions in relation to personal data.
                                    </p>
                                    <p>
                                        5.2.  Ensuring the security of personal data is achieved, in particular:

                                    </p>
                                    <p> - determination of threats to the security of personal data during their processing in information systems of personal data;

                                    </p>
                                    <p> - application of organizational and technical measures to ensure the security of personal data during their processing in personal data information systems necessary to meet the requirements for the protection of personal data, the implementation of which ensures the levels of protection of personal data established by the Government of the Russian Federation;
                                    </p>
                                    <p>
                                        - the use of information security tools that have passed the conformity assessment procedure in the prescribed manner;


                                    </p>
                                    <p>
                                        - evaluation of the effectiveness of the measures taken to ensure the security of personal data prior to the commissioning of the personal data information system;
                                    </p>
                                    <p>
                                        - taking into account machine carriers of personal data;

                                    </p>
                                    <p>
                                        - detection of facts of unauthorized access to personal data and taking measures;

                                    </p>
                                    <p>
                                        - recovery of personal data modified or destroyed due to unauthorized access to them;
                                    </p>
                                    <p>
                                        - establishing rules for access to personal data processed in the personal data information system, as well as ensuring the registration and accounting of all actions performed with personal data in the personal data information system;

                                    </p>
                                    <p> - control over the measures taken to ensure the security of personal data and the level of security of personal data information systems.

                                    </p>
                                    <p>
                                        5.3.  The operator undertakes not to transfer the received personal data to third parties, except for the following cases:


                                    </p>
                                    <p>
                                        At the request of the authorized state authorities of the Russian Federation, only on the grounds and in the manner established by the legislation of the Russian Federation, to Strategic Partners who work with the Operator to provide products and services, or to those who help the Operator sell products and services to consumers.  At the same time, the Operator provides third parties with the minimum amount of personal data necessary only to provide the required service or conduct the necessary transaction.

                                    </p>
                                    <p>
                                        SP Ovchinnikova Julia Igorevna

                                    </p>
                                    <p>
                                        PSRN 321344300027087, TIN 344103083881

                                    </p>
                                    <p>
                                        Pickup: Volgograd, Zhukov Ave. 100b (Entrance through a magnit shop)

                                    </p>
                                    <p>
                                        For pickup questions:

                                    </p>
                                    <p>
                                        +79023125532

                                    </p>
                                    <p>
                                        The phone is available during business hours from 9:00 to 18:00 (Moscow time)

                                    </p>
                                    <p>
                                        Hot line:

                                    </p>
                                    <p>
                                        8(8442)52-48-48

                                    </p>
                                    <p>
                                        Technical support:

                                    </p>
                                    <p>
                                        t.me/thebestforyourself_bot
                                    </p>
                                </div>
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default observer(Politika) 