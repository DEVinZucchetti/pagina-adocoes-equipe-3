import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import PetProfile from './PetProfile.vue'
import PetService from "@/services/PetService";

describe("Tela de perfil do pet", () => {

    const mockRoute = {
        params: {
            id: 1
        }
    }

    vi.spyOn(PetService, 'getOnePet')
        .mockResolvedValue({
            "id": 1,
            "name": "Caramelo",
            "age": 6,
            "weight": "10",
            "size": "MEDIUM",
            "race": {
                "id": 3,
                "name": "Huski",
            },
            "specie": {
                "id": 2,
                "name": "Perro",
            }
        })

    it("Espera-se que a tela seja renderizada", () => {
        const component = mount(PetProfile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })

        expect(component).toBeTruthy()
    })

    it("Espera-se que exiba as informações do pet", async () => {
        const component = mount(PetProfile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })

        await flushPromises()

        expect(component.text()).toContain("Amigo: Caramelo")
        expect(component.text()).toContain("Raça: Huski")
        expect(component.text()).toContain("IDADE: 6 ANO(S)")
        expect(component.text()).toContain("Peso: 10 KG")
        expect(component.text()).toContain("Porte: MEDIUM")
    })

})