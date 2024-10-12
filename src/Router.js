import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import VoiceRecog from "./pages/VoiceRecog/VocieRecog";
import Payment from "./pages/Payment/Payment";
import PaymentComplete from "./pages/PaymentComplet/PaymentComplet";
import BurgerRecom from "./pages/BurgerRecom/BurgerRecom";
import BurgerChoose from "./pages/BurgerChoose/BurgerChoose";
import WebSocketComponent from "./components/WebSocketComponent/WebSocketComponent"; // WebSocket 컴포넌트 추가

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/voiceRecog" element={<VoiceRecog />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentComplete" element={<PaymentComplete />} />
        <Route path="/burgerrecom" element={<BurgerRecom />} />
        <Route path="/burgerchoose" element={<BurgerChoose />} />
        <Route path="/websocket" element={<WebSocketComponent />} /> {/* WebSocket 컴포넌트 경로 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
